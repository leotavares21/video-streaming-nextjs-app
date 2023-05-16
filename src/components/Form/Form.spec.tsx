import { useForm, FormProvider } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { z } from 'zod';

import { Form } from '.';

const mockSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: 'O e-mail é obrigatório'
    })
    .email({
      message: 'Formato de e-mail inválido'
    }),
  password: z.string().nonempty({
    message: 'A senha é obrigatória'
  })
});

type MockFormData = z.infer<typeof mockSchema>;

describe('<MockForm />', () => {
  let MockForm: React.FC;

  beforeEach(() => {
    const Component = () => {
      const methodsForm = useForm<MockFormData>({
        resolver: zodResolver(mockSchema)
      });

      const { handleSubmit } = methodsForm;
      return (
        <FormProvider {...methodsForm}>
          <form onSubmit={handleSubmit((data) => data)}>
            <Form.Field>
              <Form.Label htmlFor="email">E-mail</Form.Label>
              <Form.Input name="email" />
              <Form.ErrorMessage field="email" />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Input name="password" />
              <Form.ErrorMessage field="password" />
            </Form.Field>

            <button type="submit">Entrar</button>
          </form>
        </FormProvider>
      );
    };

    MockForm = Component;
  });

  it('should render a Form correctly with its fields', () => {
    render(<MockForm />);

    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' });
    const inputPassword = screen.getByRole('textbox', { name: 'Password' });
    const submitButton = screen.getByRole('button', { name: 'Entrar' });

    expect(inputEmail).toBeVisible();
    expect(inputPassword).toBeVisible();
    expect(submitButton).toBeVisible();
  });

  it('should display error messages when the user clicks on the submit button with empty fields', async () => {
    render(<MockForm />);

    const submitButton = screen.getByRole('button', { name: 'Entrar' });

    act(() => {
      userEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(screen.getByText('O e-mail é obrigatório')).toBeVisible();
      expect(screen.getByText('A senha é obrigatória')).toBeVisible();
    });
  });

  it('should typing fields correctly and submit to form', async () => {
    render(<MockForm />);

    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' });
    const inputPassword = screen.getByRole('textbox', { name: 'Password' });
    const submitButton = screen.getByRole('button', { name: 'Entrar' });

    const mockEmail = 'email@test.com';
    const mockPassword = '123456';

    act(() => {
      userEvent.type(inputEmail, mockEmail);
      userEvent.type(inputPassword, mockPassword);
      userEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(
        screen.queryByText('O e-mail é obrigatório')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Formato de e-mail inválido')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('A senha é obrigatória')
      ).not.toBeInTheDocument();
    });
  });

  it('should typing fields incorrectly and submit to form', async () => {
    render(<MockForm />);

    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' });

    const submitButton = screen.getByRole('button', { name: 'Entrar' });

    act(() => {
      userEvent.type(inputEmail, 'invalidEmail.com');
      userEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(screen.getByText('Formato de e-mail inválido')).toBeVisible();
    });
  });
});

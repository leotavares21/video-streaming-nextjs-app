import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, describe } from 'vitest';

import { Chat } from './Chat';
import { ChatLogin } from './components/ChatLogin';
import { Messages } from './components/Messages';

describe('<Chat />', () => {
  it('should render the "Escreva sua mensagem..." message when there are no messages', () => {
    render(<Chat />);
    expect(screen.getByText('Escreva sua mensagem...')).toBeVisible();
  });

  it('should render the messages when there are messages', () => {
    const messages = [
      {
        author: 'John Doe',
        authorAvatar: 'https://example.com/avatar.jpg',
        text: 'Hello, world!'
      },
      {
        author: 'Jane Doe',
        authorAvatar: 'https://example.com/avatar.jpg',
        text: 'Hi there!'
      }
    ];
    render(<Messages messages={messages} />);

    // TODO: add an assertion to check if the messages are displayed correctly
  });

  it('should show the emoji picker when the emoji button is clicked', async () => {
    render(<Chat />);
    const emojiButton = screen.getByLabelText('face laughing');

    act(() => {
      userEvent.click(emojiButton);
    });

    // TODO: add an assertion to check if the emoji picker is displayed correctly
  });

  it('should submit the chat message when the form is submitted', () => {
    render(<Chat />);
    const chatInput = screen.getByPlaceholderText('Mensagem...');
    const sendButton = screen.getByLabelText('enviar');

    act(() => {
      userEvent.type(chatInput, 'Hello, world!');
      userEvent.click(sendButton);
    });
    // TODO: add an assertion to check if the chat message is submitted correctly
  });

  it('should render the login form and open the modal when clicking the button', async () => {
    render(<ChatLogin />);

    const entrarButton = screen.getByRole('button', { name: 'Fazer login' });

    act(() => {
      fireEvent.click(entrarButton);
    });

    const emailInput = await screen.findByPlaceholderText('E-mail');
    const passwordInput = await screen.findByPlaceholderText('Senha');
    const submitButton = screen.getByRole('button', { name: 'Entrar' });

    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(submitButton).toBeVisible();
    // TODO: add an assertion to check if the user is logged in
  });
});

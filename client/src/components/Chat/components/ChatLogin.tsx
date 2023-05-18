import { FormProvider } from 'react-hook-form';

import { useLogin } from 'hooks/useLogin';
import { useModal } from 'hooks/useModal';

import { Button } from 'components/Button';
import { Form } from 'components/Form';
import { Modal } from 'components/Modal';

export function ChatLogin() {
  const { loginForm, onLoginSubmit, handleLoginSubmit } = useLogin();
  const { openModal, setOpenModal, closeModal } = useModal();

  return (
    <>
      <div className="flex items-center justify-center px-4 w-full gap-4">
        <span>Entre para escrever no chat</span>
        <Button onClick={() => setOpenModal(true)}>Fazer login</Button>
      </div>

      <Modal
        type="small"
        title="Entrar"
        isOpen={openModal}
        onClose={closeModal}
      >
        <FormProvider {...loginForm}>
          <form
            onSubmit={handleLoginSubmit(onLoginSubmit)}
            className="p-4 flex items-end gap-2"
          >
            <Form.Field>
              <Form.ErrorMessage field="email" />
              <Form.Label variant="gray-style" htmlFor="email">
                E-mail
              </Form.Label>
              <Form.Input
                name="email"
                type="email"
                variant="gray-style"
                placeholder="E-mail"
              />
            </Form.Field>

            <Form.Field>
              <Form.ErrorMessage field="password" />
              <Form.Label variant="gray-style" htmlFor="password">
                Senha
              </Form.Label>
              <Form.Input
                name="password"
                type="password"
                variant="gray-style"
                placeholder="Senha"
              />
            </Form.Field>

            <Button type="submit">Entrar</Button>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}

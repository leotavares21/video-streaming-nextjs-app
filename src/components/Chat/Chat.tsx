import { FormProvider } from 'react-hook-form';
import { BsEmojiLaughing } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

import data from '@emoji-mart/data';
import EmojiPicker from '@emoji-mart/react';
import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';
import { useLogin } from 'hooks/useLogin';
import { useModal } from 'hooks/useModal';

import { Button } from 'components/Button';
import { Form } from 'components/Form';
import { Modal } from 'components/Modal';

import { Messages } from './components';
import { useChat } from './hooks/useChat';

type EmojiData = {
  id: string;
  native: string;
  unified: string;
};

// TODO: create a history chat variant feat
export function Chat() {
  const { openModal, setOpenModal, closeModal } = useModal();

  const { user, messages, onChatSubmit, chatForm, handleSelectedEmoji } =
    useChat();
  const { loginForm, onLoginSubmit, handleLoginSubmit } = useLogin();

  const { handleSubmit } = chatForm;

  const {
    isVisible,
    containerRef,
    toggleRef,
    handleClick,
    handleClickOutside
  } = useClickOutsideUtils();

  useClickOutside(containerRef, toggleRef, handleClickOutside);

  return (
    <div className="border border-gray-500 rounded-xl w-[25rem] h-[35rem] relative">
      <h3 className="flex justify-center items-center p-2 border-b border-gray-500">
        Chat da Live
      </h3>

      <Messages messages={messages} />

      {user ? (
        <>
          <FormProvider {...chatForm}>
            {isVisible && (
              <div
                className="absolute top-[2rem] right-[1rem] bottom-full"
                ref={containerRef}
              >
                <EmojiPicker
                  theme="dark"
                  locale="pt"
                  data={data}
                  onEmojiSelect={(emoji: EmojiData) => {
                    handleSelectedEmoji(emoji.native);
                  }}
                />
              </div>
            )}

            <form
              onSubmit={handleSubmit(onChatSubmit)}
              className="flex items-center gap-2 w-full px-4"
            >
              <Form.Input name="chatText" placeholder="Mensagem..." />

              <button
                type="button"
                className="hover:brightness-90"
                onClick={() => handleClick(!isVisible)}
                ref={toggleRef}
              >
                <BsEmojiLaughing aria-label="face laughing" />
              </button>

              <button type="submit">
                <MdSend
                  className="text-primary text-3xl hover:brightness-90"
                  aria-label="enviar"
                />
              </button>
            </form>
            <div className="pl-4">
              <Form.ErrorMessage field="chatText" />
            </div>
          </FormProvider>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center px-4 w-full gap-4">
            <span>Entre para escrever no chat</span>
            <Button onClick={() => setOpenModal(true)}>Entrar</Button>
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
      )}
    </div>
  );
}

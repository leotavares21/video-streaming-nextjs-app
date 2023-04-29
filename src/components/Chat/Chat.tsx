import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';
import { useModal } from 'hooks/useModal';

import { Button } from 'components/Button';
import { Modal } from 'components/Modal';

import {
  Messages,
  ChatInput,
  EmojiPicker,
  EmojiToggleButton
} from './components';
import { useChat } from './hooks/useChat';

export function Chat() {
  const { openModal, setOpenModal, closeModal } = useModal();

  const { user, messages, newMessage, setNewMessage, handleMessageSubmit } =
    useChat();

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
          <EmojiPicker
            isVisible={isVisible}
            containerRef={containerRef}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
          />

          <ChatInput
            handleSubmit={handleMessageSubmit}
            handleNewMessage={setNewMessage}
            newMessage={newMessage}
          >
            <EmojiToggleButton
              isVisible={isVisible}
              toggleRef={toggleRef}
              onOpen={handleClick}
            />
          </ChatInput>
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
            <form
              action=""
              className="p-4 flex justify-center items-center gap-2"
            >
              <input type="email" placeholder="E-mail" className="input-auth" />
              <input
                type="password"
                placeholder="Senha"
                className="input-auth"
              />

              <Button type="submit">Entrar</Button>
            </form>
          </Modal>
        </>
      )}
    </div>
  );
}

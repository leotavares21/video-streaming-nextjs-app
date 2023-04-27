import { useChat } from 'hooks/useChat';
import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';
import { useModal } from 'hooks/useModal';

import Button from 'components/Button';
import Modal from 'components/Modal';

import {
  ChatEmojiButton,
  ChatEmojiList,
  ChatInput,
  ChatMessages
} from './ChatComponents';

export default function Chat() {
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
    <div className="border border-gray-500 rounded-xl w-full h-full relative">
      <h3 className="flex justify-center items-center p-2 border-b border-gray-500">
        Chat da Live
      </h3>

      <ChatMessages messages={messages} />

      {user && (
        <>
          <ChatEmojiList
            isVisible={isVisible}
            containerRef={containerRef}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
          />

          <ChatEmojiButton
            toggleRef={toggleRef}
            isVisible={isVisible}
            onOpen={handleClick}
          />

          <ChatInput
            handleSubmit={handleMessageSubmit}
            handleNewMessage={setNewMessage}
            newMessage={newMessage}
          />
        </>
      )}

      {!user && (
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

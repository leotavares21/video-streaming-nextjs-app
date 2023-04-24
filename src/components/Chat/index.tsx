import { BsEmojiLaughing } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useChat } from 'hooks/useChat';
import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';
import { useModal } from 'hooks/useModal';

import Button from 'components/Button';
import Modal from 'components/Modal';

type EmojiData = {
  id: string;
  native: string;
  unified: string;
};

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
      <div className="h-[26rem] px-4 mb-4 overflow-y-auto scroll-style border-b border-gray-500 ">
        {messages.length === 0 && (
          <span className="text-gray-200">Escreva sua mensagem...</span>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex gap-2 mb-4 text-ellipsis overflow-hidden whitespace-break-spaces"
          >
            <img
              src={user.img}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />

            <p>
              <span className="font-medium text-gray-200 whitespace-nowrap mr-2">
                {message.author}
              </span>
              {message.text}
            </p>
          </div>
        ))}
      </div>

      {!user && (
        <>
          <div className="flex items-center justify-center px-4 w-full gap-4">
            <span>Entre para escrever no chat</span>
            <button
              className="btn btn-primary"
              onClick={() => setOpenModal(true)}
            >
              Entrar
            </button>
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

      {user && (
        <>
          {isVisible && (
            <div
              className="absolute top-[3rem] right-[1rem] bottom-full"
              ref={containerRef}
            >
              <Picker
                theme="dark"
                locale="pt"
                data={data}
                onEmojiSelect={(emoji: EmojiData) =>
                  setNewMessage(newMessage + emoji.native)
                }
              />
            </div>
          )}

          <button
            className="absolute bottom-[1.80rem] right-[3rem] p-2 hover:brightness-90"
            onClick={() => handleClick(!isVisible)}
            ref={toggleRef}
          >
            <BsEmojiLaughing role="menu" aria-label="carinha sorrindo" />
          </button>

          <form onSubmit={handleMessageSubmit} className="flex w-full px-4">
            <input
              type="text"
              value={newMessage}
              onChange={(event) => setNewMessage(event.target.value)}
              placeholder="Mensagem..."
              className="input-form input-outline mr-8"
            />
            <button type="submit" className="ml-2">
              <MdSend className="text-primary text-3xl hover:brightness-90" />
            </button>
          </form>
        </>
      )}
    </div>
  );
}

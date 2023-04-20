import { useEffect, useState, useRef } from 'react';
import { BsEmojiLaughing } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';
import { connect } from 'react-redux';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useClickInOut } from 'hooks/useClickInOut';
import io, { Socket } from 'socket.io-client';

import Modal from 'components/Modal';

import { PagesMapState, User } from 'store/types';

type Message = {
  id: number;
  author: string;
  text: string;
};

type ChatProps = {
  username: string;
  user: User;
  className?: string;
};

type EmojiData = {
  id: string;
  keywords: string[];
  name: string;
  native?: string;
  shortcodes: string;
  unified: string;
};

function Chat({ username, user, className }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState<Socket>();
  const [showPicker, setShowPicker] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('chat message', (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  function handleMessageSubmit(event: React.FormEvent) {
    event.preventDefault();
    const message: Message = {
      id: messages.length + 1,
      author: username,
      text: newMessage
    };
    setMessages([...messages, message]);
    setNewMessage('');
    if (socket) {
      socket.emit('chat message', message);
    }
  }

  function closeModal() {
    setOpenModal(false);
  }

  function handleClickOutside() {
    setShowPicker(false);
  }

  useClickInOut(containerRef, toggleRef, handleClickOutside);

  return (
    <div className={`${className} border border-gray-500 rounded-xl relative`}>
      <h3 className="flex justify-center items-center p-2 border-b border-gray-500">
        Chat da Live
      </h3>
      <div className="h-[26rem] px-4 mb-4 overflow-y-auto scroll-chat border-b border-gray-500 ">
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
              className="btn btn-secondary"
              onClick={() => setOpenModal(true)}
            >
              Entrar
            </button>
          </div>

          <Modal
            className="absolute bottom-0"
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
              <button className="btn btn-secondary">entrar</button>
            </form>
          </Modal>
        </>
      )}

      {user && (
        <>
          {showPicker && (
            <div
              className="absolute top-[3rem] right-[1rem] bottom-full"
              ref={containerRef}
            >
              <Picker
                theme="dark"
                locale="pt"
                data={data}
                onEmojiSelect={(emoji: EmojiData) =>
                  setNewMessage(newMessage + emoji?.native)
                }
              />
            </div>
          )}

          <button
            className="absolute bottom-[1.80rem] right-[3rem] p-2 hover:brightness-90"
            onClick={() => setShowPicker(!showPicker)}
            ref={toggleRef}
          >
            <BsEmojiLaughing role="icon" aria-label="Smiling face" />
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
              <MdSend className="text-secondary text-3xl hover:brightness-90" />
            </button>
          </form>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  user: state.user.data
});

export default connect(mapStateToProps)(Chat);

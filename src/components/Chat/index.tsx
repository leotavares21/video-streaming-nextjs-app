import { useEffect, useState } from 'react';
import { MdSend } from 'react-icons/md';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import io, { Socket } from 'socket.io-client';

import Modal from 'components/Modal';

type Message = {
  id: number;
  author: string;
  text: string;
};

type ChatProps = {
  username: string;
};

type EmojiData = {
  id: string;
  keywords: string[];
  name: string;
  native: string;
  shortcodes: string;
  unified: string;
};

export default function Chat({ username }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState<Socket>();
  const [showPicker, setShowPicker] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  return (
    <div className="w-1/3 h-[35rem] border border-gray-500 rounded-xl relative">
      <h3 className="flex justify-center items-center p-2 border-b border-gray-500">
        Chat da Live
      </h3>
      <div className="h-[26rem] px-4 mb-4 overflow-y-auto scroll-chat border-b border-gray-500 ">
        {messages.length === 0 && (
          <span className="text-gray">Escreva sua mensagem...</span>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex gap-2 mb-4 text-ellipsis overflow-hidden whitespace-break-spaces"
          >
            <img
              src="https://source.unsplash.com/random/200x200?person"
              alt="person"
              className="w-8 h-8 rounded-full"
            />

            <p>
              <span className="font-medium text-gray whitespace-nowrap mr-2">
                {message.author}
              </span>
              {message.text}
            </p>
          </div>
        ))}
      </div>

      {true && (
        <div className="flex items-center justify-center px-4 w-full gap-4">
          <span>Entre para escrever no chat</span>
          <button
            className="btn btn-secondary"
            onClick={() => setOpenModal(true)}
          >
            Entrar
          </button>
        </div>
      )}

      <Modal
        className="absolute bottom-0"
        title="Entrar"
        isOpen={openModal}
        onClose={closeModal}
      >
        <form action="" className="p-4 flex justify-center items-center gap-2">
          <input type="email" placeholder="E-mail" className="input-auth" />
          <input type="password" placeholder="Senha" className="input-auth" />
          <button className="btn btn-secondary">entrar</button>
        </form>
      </Modal>

      {false && (
        <>
          {showPicker && (
            <div className="absolute bottom-[5rem] right-[1rem] bottom-full">
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
            className="absolute bottom-[1.60rem] right-[3rem] p-2 grayscale hover:brightness-90"
            onClick={() => setShowPicker(!showPicker)}
          >
            <span role="img" aria-label="Smiling face with sunglasses">
              😀
            </span>
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

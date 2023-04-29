import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import io, { Socket } from 'socket.io-client';

import { PagesMapState } from 'store/types';

export type Message = {
  id: number;
  author: string;
  author_img: string;
  text: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState<Socket>();
  const user = useSelector((state: PagesMapState) => state.user.data);

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
      author: `${user.name} ${user.last_name}`,
      author_img: user.img,
      text: newMessage
    };
    setMessages([...messages, message]);
    setNewMessage('');
    if (socket) {
      socket.emit('chat message', message);
    }
  }

  return {
    user,
    messages,
    newMessage,
    setNewMessage,
    handleMessageSubmit
  };
}

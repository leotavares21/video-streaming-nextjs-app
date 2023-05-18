import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { chatSchema } from 'schemas/chatSchema';
import io, { Socket } from 'socket.io-client';
import { z } from 'zod';

import { useUserStore } from 'store';

export type Message = {
  author: string;
  authorAvatar: string;
  text: string;
};

type ChatData = z.infer<typeof chatSchema>;

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<Socket>();
  const {
    state: { user }
  } = useUserStore();

  const chatForm = useForm<ChatData>({
    resolver: zodResolver(chatSchema)
  });

  const { reset, watch, setValue } = chatForm;

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

  function handleSelectedEmoji(emoji: string) {
    setValue('chatText', watch('chatText') + emoji);
  }

  function onChatSubmit(data: ChatData) {
    const message = {
      author: user.name,
      authorAvatar: user.avatar,
      text: data.chatText
    };

    setMessages([...messages, message]);
    reset();
    if (socket) {
      socket.emit('chat message', message);
    }
  }

  return {
    user,
    messages,
    onChatSubmit,
    chatForm,
    handleSelectedEmoji
  };
}

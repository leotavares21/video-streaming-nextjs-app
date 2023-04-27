import { Dispatch, FormEvent, SetStateAction } from 'react';
import { BsEmojiLaughing } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Message } from 'hooks/useChat';

type ChatMessagesProps = {
  messages: Message[];
};

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
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
            src={message.author_img}
            alt={message.author}
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
  );
}

type ChatEmojiListProps = {
  isVisible: boolean;
  containerRef: React.MutableRefObject<null>;
  newMessage: string;
  setNewMessage: Dispatch<SetStateAction<string>>;
};

type EmojiData = {
  id: string;
  native: string;
  unified: string;
};

export function ChatEmojiList({
  isVisible,
  containerRef,
  newMessage,
  setNewMessage
}: ChatEmojiListProps) {
  if (isVisible) {
    return (
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
    );
  }
  return <></>;
}

type ChatEmojiButtonProps = {
  toggleRef: React.MutableRefObject<null>;
  isVisible: boolean;
  onOpen: (isVisible: boolean) => void;
};

export function ChatEmojiButton({
  toggleRef,
  isVisible,
  onOpen
}: ChatEmojiButtonProps) {
  return (
    <button
      className="absolute bottom-[1.80rem] right-[3rem] p-2 hover:brightness-90"
      onClick={() => onOpen(!isVisible)}
      ref={toggleRef}
    >
      <BsEmojiLaughing role="menu" aria-label="carinha sorrindo" />
    </button>
  );
}

type ChatInputProps = {
  newMessage: string;
  handleNewMessage: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: FormEvent<Element>) => void;
};

export function ChatInput({
  newMessage,
  handleNewMessage,
  handleSubmit
}: ChatInputProps) {
  return (
    <form onSubmit={handleSubmit} className="flex w-full px-4">
      <input
        type="text"
        value={newMessage}
        onChange={(event) => handleNewMessage(event.target.value)}
        placeholder="Mensagem..."
        className="input-form input-outline mr-8"
      />
      <button type="submit" className="ml-2">
        <MdSend
          className="text-primary text-3xl hover:brightness-90"
          aria-label="enviar"
        />
      </button>
    </form>
  );
}

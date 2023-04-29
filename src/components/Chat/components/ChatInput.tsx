import { Dispatch, FormEvent, SetStateAction } from 'react';
import { MdSend } from 'react-icons/md';

type ChatInputProps = {
  newMessage: string;
  handleNewMessage: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: FormEvent<Element>) => void;
  children: React.ReactNode;
};

export function ChatInput({
  newMessage,
  handleNewMessage,
  handleSubmit,
  children
}: ChatInputProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full px-4"
    >
      <input
        type="text"
        value={newMessage}
        onChange={(event) => handleNewMessage(event.target.value)}
        placeholder="Mensagem..."
        className="input-form input-outline"
      />

      {children}

      <button type="submit">
        <MdSend
          className="text-primary text-3xl hover:brightness-90"
          aria-label="enviar"
        />
      </button>
    </form>
  );
}

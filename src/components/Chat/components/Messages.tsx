import { Message } from 'components/Chat/hooks/useChat';

type MessagesProps = {
  messages: Message[];
};

export function Messages({ messages }: MessagesProps) {
  return (
    <div className="h-[26rem] px-4 mb-4 overflow-y-auto scroll-style border-b border-gray-500 ">
      {messages.length === 0 && (
        <span className="text-gray-200">Escreva sua mensagem...</span>
      )}
      {messages.map((message, index) => (
        <div
          key={index}
          className="flex gap-2 mb-4 text-ellipsis overflow-hidden whitespace-break-spaces"
        >
          <img
            src={message.authorAvatar}
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

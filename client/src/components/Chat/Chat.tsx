import { FormProvider } from 'react-hook-form';
import { BsEmojiLaughing } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

import data from '@emoji-mart/data';
import EmojiPicker from '@emoji-mart/react';
import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';

import { Form } from 'components/Form';

import { Messages } from './components';
import { ChatLogin } from './components/ChatLogin';
import { useChat } from './hooks/useChat';

type EmojiData = {
  id: string;
  native: string;
  unified: string;
};

// TODO: create a history chat variant feat
export function Chat() {
  const { user, messages, onChatSubmit, chatForm, handleSelectedEmoji } =
    useChat();

  const { handleSubmit } = chatForm;

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
          <FormProvider {...chatForm}>
            {isVisible && (
              <div
                className="absolute top-[2rem] right-[1rem] bottom-full"
                ref={containerRef}
              >
                <EmojiPicker
                  theme="dark"
                  locale="pt"
                  data={data}
                  onEmojiSelect={(emoji: EmojiData) => {
                    handleSelectedEmoji(emoji.native);
                  }}
                />
              </div>
            )}

            <form
              onSubmit={handleSubmit(onChatSubmit)}
              className="flex items-center gap-2 w-full px-4"
            >
              <Form.Input name="chatText" placeholder="Mensagem..." />

              <button
                type="button"
                className="hover:brightness-90"
                onClick={() => handleClick(!isVisible)}
                ref={toggleRef}
              >
                <BsEmojiLaughing aria-label="face laughing" />
              </button>

              <button type="submit">
                <MdSend
                  className="text-primary text-3xl hover:brightness-90"
                  aria-label="enviar"
                />
              </button>
            </form>
            <div className="pl-4">
              <Form.ErrorMessage field="chatText" />
            </div>
          </FormProvider>
        </>
      ) : (
        <ChatLogin />
      )}
    </div>
  );
}

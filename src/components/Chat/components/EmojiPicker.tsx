import { Dispatch, SetStateAction } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

type EmojiPickerProps = {
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

export function EmojiPicker({
  isVisible,
  containerRef,
  newMessage,
  setNewMessage
}: EmojiPickerProps) {
  if (isVisible) {
    return (
      <div
        className="absolute top-[2rem] right-[1rem] bottom-full"
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

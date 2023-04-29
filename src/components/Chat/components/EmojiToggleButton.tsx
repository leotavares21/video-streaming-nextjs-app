import { BsEmojiLaughing } from 'react-icons/bs';

type EmojiToggleButtonProps = {
  toggleRef: React.MutableRefObject<null>;
  isVisible: boolean;
  onOpen: (isVisible: boolean) => void;
};

export function EmojiToggleButton({
  toggleRef,
  isVisible,
  onOpen
}: EmojiToggleButtonProps) {
  return (
    <button
      type="button"
      className="hover:brightness-90"
      onClick={() => onOpen(!isVisible)}
      ref={toggleRef}
    >
      <BsEmojiLaughing role="menu" aria-label="carinha sorrindo" />
    </button>
  );
}

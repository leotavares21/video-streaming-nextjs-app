import { BsThreeDotsVertical } from 'react-icons/bs';

type ProfileToggleButtonProps = {
  toggleRef: React.MutableRefObject<null>;
  isVisible: boolean;
  handleClick: (isVisible: boolean) => void;
};

export function ProfileToggleButton({
  toggleRef,
  isVisible,
  handleClick
}: ProfileToggleButtonProps) {
  return (
    <div
      className="cursor-pointer p-1 bg-gray-300 bg-opacity-25 hover:bg-gray-200 hover:bg-opacity-50 rounded-full"
      ref={toggleRef}
      onClick={() => handleClick(!isVisible)}
    >
      <BsThreeDotsVertical />
    </div>
  );
}

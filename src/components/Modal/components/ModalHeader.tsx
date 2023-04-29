import { IoCloseCircle } from 'react-icons/io5';

type ModalHeaderProps = {
  title: string;
  onClose: () => void;
};

export function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <div className="flex justify-between items-center w-full p-4 border-b border-gray-200">
      <h3 className="text-black mb-0">{title}</h3>
      <button className="hover:brightness-90" onClick={onClose}>
        <IoCloseCircle className="text-accent text-2xl" />
      </button>
    </div>
  );
}

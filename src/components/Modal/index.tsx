import { IoCloseCircle } from 'react-icons/io5';

type ModalProps = {
  className?: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({
  className,
  title,
  isOpen,
  onClose,
  children
}: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className={`${className} bg-white rounded-md w-full`}>
          <div className="flex justify-between items-center w-full p-4 border-b border-gray">
            <h3 className="text-black mb-0">{title}</h3>
            <button className="hover:brightness-90" onClick={onClose}>
              <IoCloseCircle className="text-accent text-2xl" />
            </button>
          </div>

          {children}
        </div>
      )}
    </>
  );
}

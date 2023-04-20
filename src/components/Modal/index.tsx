import { useRef } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

import { useClickInOut } from 'hooks/useClickInOut';

type ModalProps = {
  className?: string;
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({
  className,
  title,
  isOpen,
  children,
  onClose
}: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef(null);

  function handleClickOutside() {
    onClose();
  }

  useClickInOut(containerRef, toggleRef, handleClickOutside);
  return (
    <>
      {isOpen && (
        <div
          className={`${className} bg-white rounded-md w-full`}
          ref={containerRef}
        >
          <div className="flex justify-between items-center w-full p-4 border-b border-gray-200">
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

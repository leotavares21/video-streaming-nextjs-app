import { IoCloseCircle } from 'react-icons/io5';

import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';

type ModalProps = {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  type?: 'small';
  onClose: () => void;
};

export default function Modal({
  title,
  isOpen,
  children,
  type,
  onClose
}: ModalProps) {
  const { containerRef, toggleRef } = useClickOutsideUtils();

  useClickOutside(containerRef, toggleRef, onClose);
  if (type === 'small') {
    return (
      <>
        {isOpen && (
          <div
            className="bg-white rounded-md absolute bottom-0"
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
  return (
    <>
      {isOpen && (
        <div className="fixed left-[0vw] top-[0vh] w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.6)] backdrop-blur-md z-50">
          <div
            className="bg-white rounded-md absolute w-[40rem] max-w-[95vw] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
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
        </div>
      )}
    </>
  );
}

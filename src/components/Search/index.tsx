import { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useClickInOut } from 'hooks/useClickInOut';

type SearchProps = {
  className?: string;
};

export default function Search({ className }: SearchProps) {
  const [isVisible, setisVisible] = useState(false);
  const containerRef = useRef<HTMLFormElement>(null);
  const toggleRef = useRef<HTMLInputElement>(null);

  function handleClickOutside() {
    setisVisible(false);
  }

  useClickInOut(containerRef, toggleRef, handleClickOutside);

  return (
    <form
      className={`${className} flex items-center justify-center relative`}
      onClick={() => setisVisible(true)}
      ref={containerRef}
    >
      <FiSearch className="text-black absolute left-3 cursor-pointer text-xl" />
      <input
        type="text"
        className="rounded-xl pl-10 pr-4 py-3 input-outline"
        placeholder="Buscar..."
        ref={toggleRef}
      />

      {isVisible && (
        <div className="bg-white w-full min-h-[8rem] absolute top-full mt-2 p-4 rounded-lg">
          <span className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nemo ex esse aliquid ipsa sint maiores itaque magnam explicabo
            consectetur fugit odit iusto, corrupti hic recusandae mollitia
            quaerat in aperiam quam facilis qui dolores nisi necessitatibus?
            Esse, illum, sint sapiente libero consectetur inventore quae
            voluptate fuga quisquam, veniam ea dolorem.
          </span>
        </div>
      )}
    </form>
  );
}

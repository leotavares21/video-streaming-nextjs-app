import Link from 'next/link';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCloseCircle } from 'react-icons/io5';
import { connect } from 'react-redux';

import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';

import { ChannelPreview } from 'components/ChannelPreview';

import { PagesMapState, User } from 'store/types';

type SearchProps = {
  user: User;
};

function Search({ user }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const {
    isVisible,
    containerRef,
    toggleRef,
    handleClick,
    handleClickOutside
  } = useClickOutsideUtils();

  useClickOutside(containerRef, toggleRef, handleClickOutside);

  return (
    <form
      className="flex items-center justify-center lg:w-2/5 w-1/2 relative"
      onClick={() => handleClick(true)}
      ref={containerRef}
    >
      <FiSearch className="text-black absolute left-3 text-xl" />

      <input
        type="text"
        className="rounded-xl px-10 py-3 input-outline"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        ref={toggleRef}
      />

      {searchTerm.length > 0 && (
        <IoCloseCircle
          onClick={() => setSearchTerm('')}
          className="absolute right-[0.5rem] text-accent text-xl cursor-pointer hover:brightness-90"
        />
      )}

      {isVisible && (
        <div className="bg-white w-full min-h-[6rem] h-[14rem] overflow-y-auto scroll-style top-full mt-[1.5px] p-4 rounded-lg absolute">
          <Link
            href="/channel/video/id"
            className="flex items-center gap-4 mb-2 hover:bg-gray-100"
          >
            <div className="flex justify-center items-center w-10 h-10">
              <FiSearch className="text-black text-xl" />
            </div>
            <span className="text-gray-500 text-lg">video name</span>
          </Link>

          <ChannelPreview channels={user.following.channels} type="search" />
        </div>
      )}
    </form>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  user: state.user.data
});

const SearchComponent = connect(mapStateToProps)(Search);

export { SearchComponent as Search };

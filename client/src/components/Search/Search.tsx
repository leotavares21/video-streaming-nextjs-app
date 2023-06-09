import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';
import { IoCloseCircle } from 'react-icons/io5';

import { zodResolver } from '@hookform/resolvers/zod';
import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';
import { searchSchema } from 'schemas/searchSchema';
import { z } from 'zod';

import { Form } from 'components/Form';
import { ProfilePreview } from 'components/ProfilePreview';

import { useUserStore } from 'store';

type searchData = z.infer<typeof searchSchema>;

export function Search() {
  const {
    state: { user }
  } = useUserStore();

  const searchForm = useForm<searchData>({
    resolver: zodResolver(searchSchema)
  });

  function getSearchData(data: searchData) {
    console.log(data);
  }
  const { handleSubmit, reset, watch } = searchForm;

  const {
    isVisible,
    containerRef,
    toggleRef,
    handleClick,
    handleClickOutside
  } = useClickOutsideUtils();

  useClickOutside(containerRef, toggleRef, handleClickOutside);

  return (
    <FormProvider {...searchForm}>
      <form
        className="flex items-center justify-center lg:w-2/5 w-1/2 relative"
        onSubmit={handleSubmit(getSearchData)}
        onClick={() => handleClick(true)}
        ref={containerRef}
      >
        <FiSearch className="text-black absolute left-3 text-xl" />

        <Form.Field custom_ref={toggleRef}>
          <Form.Input
            name="searchTerm"
            placeholder="Busque por Videos ou Canais..."
            variant="search-style"
          />
        </Form.Field>

        {watch('searchTerm') && (
          <IoCloseCircle
            onClick={() => reset()}
            className="absolute right-[0.5rem] text-accent text-xl cursor-pointer hover:brightness-90"
          />
        )}

        {isVisible && (
          <div className="bg-gray-50 w-full min-h-[6rem] h-[14rem] overflow-y-auto scroll-style top-full mt-[1.5px] p-4 rounded-lg absolute">
            <Form.ErrorMessage field="searchTerm" />
            <Link
              href="/profile/video/id"
              className="flex items-center gap-4 mb-2 hover:bg-gray-100"
            >
              <div className="flex justify-center items-center w-10 h-10">
                <FiSearch className="text-black text-xl" />
              </div>
              <span className="text-gray-500 text-lg">video name</span>
            </Link>

            <ProfilePreview profiles={user.following.profiles} type="search" />
          </div>
        )}
      </form>
    </FormProvider>
  );
}

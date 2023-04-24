import { useState } from 'react';

export function useModal() {
  const [openModal, setOpenModal] = useState(false);

  function closeModal() {
    setOpenModal(false);
  }
  return {
    openModal,
    setOpenModal,
    closeModal
  };
}

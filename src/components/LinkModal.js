// LinkWithModal.js
import React, { useState } from 'react';
import CustomModal from './Modal';

const LinkWithModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <a href="#" onClick={openModal}>
        Open Modal
      </a>
      <CustomModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content="This is the content of the modal."
      />
    </div>
  );
};

export default LinkWithModal;

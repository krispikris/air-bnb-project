// frontend/src/components/UpdateSpotForm/index.js
import    React, { useState }   from 'react';
import  { Modal }               from '../../context/Modal';
import    UpdateSpotForm        from './UpdateSpotForm';

const UpdateSpotFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button  onClick={() => setShowModal(true)}>Update Spot</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateSpotForm />
        </Modal>
      )}
    </>
  );
}

export default UpdateSpotFormModal;

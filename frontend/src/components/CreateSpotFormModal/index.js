// frontend/src/components/CreateSpotModal/index.js
import    React, { useState }   from 'react';
import  { Modal }               from '../../context/Modal';
import    CreateSpotForm        from './CreateSpotForm';

const CreateSpotFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button  onClick={() => setShowModal(true)}>Create New Spot</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateSpotForm setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    );
  }

  export default CreateSpotFormModal;

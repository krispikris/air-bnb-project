import    React, { useState }   from 'react';
import  { Modal }               from '../../../context/Modal';
import    CreateReviewForm      from './CreateReviewForm';

const CreateReviewFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
      <button  onClick={() => setShowModal(true)}>Create Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
    );
};

export default CreateReviewFormModal;

import    React, { useState }   from 'react';
import  { Modal }               from '../../../context/Modal';
import    DeleteReviewForm      from './DeleteReviewForm';

const DeleteReviewFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
      <button  onClick={() => setShowModal(true)}>Delete Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReviewForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
    );
};

export default DeleteReviewFormModal;

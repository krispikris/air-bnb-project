import    React, { useState }   from 'react';
import  { Modal }               from '../../../context/Modal';
import    UpdateReviewForm      from './UpdateReviewForm';

const UpdateReviewFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
      <button  onClick={() => setShowModal(true)}>Update Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateReviewForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
    );
};

export default UpdateReviewFormModal;

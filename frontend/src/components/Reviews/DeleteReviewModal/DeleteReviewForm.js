// frontend/src/components/DeleteReviewModal/DeleteReviewForm.js
import    React, { useState }               from "react";
import  { useDispatch, useSelector }        from "react-redux";
import  { useHistory, useParams }                       from "react-router-dom";
import  { deleteReviewThunk }               from "../../../store/reviews";
import                                           "./DeleteReview.css";

const DeleteReviewForm = ({setShowModal, reviewToUpdate}) => {
    const dispatch          = useDispatch();

    // console.log('======', reviewToUpdate);

    const deleteReview = async (e) => {
        e.preventDefault();

        await dispatch(deleteReviewThunk(reviewToUpdate.id));
        setShowModal(false);
    }

return (
    <>
        <form
            className='delete-review-form'
            onSubmit={deleteReview}
            >
            <h3>Are you sure you want to delete your review?</h3>
            <button type="submit">Delete Review</button>
        </form>
    </>
    )
};

export default DeleteReviewForm;

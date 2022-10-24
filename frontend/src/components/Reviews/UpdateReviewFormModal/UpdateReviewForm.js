// frontend/src/components/UpdateReviewModal/UpdateReviewForm.js
import    React, { useState }               from "react";
import  { useDispatch }                     from "react-redux";
import  { updateReviewThunk }               from "../../../store/reviews";
import                                           "./UpdateReviewForm.css";

const UpdateReviewForm = ({setShowModal, reviewToUpdate}) => {
    // updateReviewForm takes in a prop
    // prop is being deconstructed

    const reviewId = reviewToUpdate.id;
    const dispatch = useDispatch();

    const [review, setReview] = useState(reviewToUpdate.review);
    const [stars, setStars] = useState(reviewToUpdate.stars)

    console.log('==================', reviewToUpdate);
    console.log('==================', reviewId);
    console.log('==================', reviewToUpdate.review);
    console.log('==================', reviewToUpdate.stars);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let updatedReviewInput = {
            review,
            stars
        };

        await dispatch(updateReviewThunk(updatedReviewInput, reviewId));
        setShowModal(false);
    };

return (
    <form
        className='update-review-form'
        onSubmit={handleSubmit}
        >

        <label id="update-review-title">UPDATE YOUR REVIEW</label>

        <label id="update-review-input-title">Updated Review</label>
            <textarea id="update-review-input-1"
            type="text"
            name="review"
            value={review}
            onChange={e => setReview(e.target.value)}
            />

        <label id="update-review-input-title">Updated Star Count</label>
            <input id="update-review-input-2"
            type="number"
            name="stars"
            min='1'
            max='5'
            value={stars}
            onChange={e => setStars(e.target.value)}
            />

            <button id="update-review-submit" type="submit">Update Review</button>

        </form>

    )
};

export default UpdateReviewForm;

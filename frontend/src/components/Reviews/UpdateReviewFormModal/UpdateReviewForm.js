// frontend/src/components/UpdateReviewModal/UpdateReviewForm.js
import    React, { useState }               from "react";
import  { useDispatch, useSelector }        from "react-redux";
import  { useParams }                       from "react-router-dom";
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

        <label>
            Update Review
            <input
            type="text"
            name="review"
            value={review}
            onChange={e => setReview(e.target.value)}
            />
        </label>

        <label>
            Update Stars
            <input
            type="text"
            name="stars"
            value={stars}
            onChange={e => setStars(e.target.value)}
            />
        </label>

            <button type="submit">Update Review</button>

        </form>

    )
};

export default UpdateReviewForm;

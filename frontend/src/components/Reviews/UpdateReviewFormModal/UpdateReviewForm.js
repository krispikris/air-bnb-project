// frontend/src/components/UpdateReviewModal/UpdateReviewForm.js
import    React, { useState }               from "react";
import  { useDispatch, useSelector }        from "react-redux";
import  { useParams }                       from "react-router-dom";
import  { updateReviewThunk }               from "../../../store/reviews";
import                                           "./UpdateReviewForm.css";

const UpdateReviewForm = ({setShowModal}) => {
    const dispatch = useDispatch();
    const { reviewId } = useParams();

    const review = useSelector(state => state.reviews.user.id);

    const [reviewInput, setReviewInput] = useState[review.review];

    const handleSubmit = async (e) => {
        e.preventDefault();

        let updatedReviewInput = {
            reviewInput
        };
    };

return (
    <form
        className='update-review-form'
        onSubmit={handleSubmit}
        >

        <label>
            Review Input
            <input
            type="text"
            name="reviewInput"
            value={reviewInput}
            onChange={e => setReviewInput(e.target.value)}
            />
        </label>

            <button type="submit">Update Review</button>

        </form>

    )
};

export default UpdateReviewForm;

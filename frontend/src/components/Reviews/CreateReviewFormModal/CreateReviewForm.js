// frontend/src/components/CreateReviewModal/CreateReviewForm.js
import    React, { useState }               from "react";
import  { useDispatch }                     from "react-redux";
import  { useParams }                       from "react-router-dom";
import  { createReviewThunk }               from "../../../store/reviews";
import                                           "./CreateReviewForm.css";

const CreateReviewForm = ({setShowModal}) => {
    const dispatch = useDispatch();
    const { spotId } = useParams();

    const [review, setReview] = useState('');
    const [stars, setStars] = useState(5);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let reviewInput = { review, stars };
        console.log("THIS CREATED REVIEW : ", reviewInput);

        await dispatch(createReviewThunk(reviewInput, spotId));
        setShowModal(false);
    };

return (
    <form
        className='create-new-review-form'
        onSubmit={handleSubmit}
        >

        <label>
            New Review
            <input
            type="text"
            name="review"
            value={review}
            placeholder="How was your experience?"
            onChange={e => setReview(e.target.value)}
            />
        </label>

        <label>
            Stars
            <input
            type="number"
            name="stars"
            min='1'
            max='5'
            value={stars}
            onChange={e => setStars(e.target.value)}
            />
        </label>


        <button type="submit">Create Review</button>

    </form>

    )
};

export default CreateReviewForm;

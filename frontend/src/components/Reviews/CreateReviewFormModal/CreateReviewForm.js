// frontend/src/components/CreateReviewModal/CreateReviewForm.js
import    React, { useState }               from "react";
import  { useDispatch, useSelector }        from "react-redux";
import  { useParams }                       from "react-router-dom";
import  { createReviewThunk }               from "../../../store/reviews";
import                                           "./CreateReviewForm.css";

const CreateReviewForm = ({setShowModal}) => {
    const dispatch = useDispatch();
    const { spotId } = useParams();

    const currentUser = useSelector((state) => state.session.user)
    console.log('This is the current user as an OBJECT: ', currentUser);

    const [review, setReview] = useState('');
    const [stars, setStars] = useState(5);

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let reviewInput = { review, stars };
        // console.log("THIS CREATED REVIEW : ", reviewInput);

        await dispatch(createReviewThunk(reviewInput, spotId, currentUser))
        .then(() => setShowModal(false))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        })
    };

return (
    <>
    {errors.map((err, i) => {
        <div className="review-errors" key={i}>
            {err}
        </div>
    })}

    <form
        className='create-review-form'
        onSubmit={handleSubmit}
        >
        <label id="create-review-title">LEAVE A REVIEW</label>
        <label id="how-was-your-experience">How was your Experience?</label>

        <label id="create-review-input-title">Review</label>
            <input id="create-review-inputs"
            type="text"
            name="review"
            value={review}
            placeholder="Example: The Treehouse was clean and amazing!"
            onChange={e => setReview(e.target.value)}
            />

        <label id="create-review-input-title">Stars</label>
            <input id="create-review-inputs"
            type="number"
            name="stars"
            min='1'
            max='5'
            value={stars}
            onChange={e => setStars(e.target.value)}
            />


        <button id="create-review-submit" type="submit">Create Review</button>

    </form>

    </>
    )
};

export default CreateReviewForm;

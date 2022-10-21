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

    const [reviewBody, setReviewBody] = useState[review.review];
return (
    <>

    </>
    )
};

export default UpdateReviewForm;

import { useEffect, useState }          from "react";
import { useDispatch, useSelector }     from "react-redux";
import { useParams }                    from "react-router-dom";
import { getOneSpotThunk }              from "../../../store/spots";
import { getReviewsThunk }              from "../../../store/reviews";
import   UpdateSpotFormModal            from "../UpdateSpotFormModal";
import   DeleteButton                   from "../DeleteButton/DeleteButton";
import   CreateReviewFormModal          from "../../Reviews/CreateReviewFormModal";
import   UpdateReviewFormModal          from "../../Reviews/UpdateReviewFormModal";
import   DeleteReviewFormModal          from "../../Reviews/DeleteReviewModal";
import                                       "./SpotDetails.css";


const SpotDetails = () => {
    const   dispatch        = useDispatch();
    const { spotId }        = useParams();

    const [ isLoaded, setIsLoaded ] = useState(false);

    const   spots           = useSelector(state => state.spots);
    const   spot            = spots[spotId];

    const   reviews         = useSelector(state => state.reviews);
    const   allReviews      = Object.values(reviews);

    const   currentUserId   = useSelector(state => state.session.user.id);
    const   reviewToUpdate  = allReviews.find(review => review.userId === currentUserId);

    useEffect(() => {
        dispatch(getOneSpotThunk(spotId))
        .then(() => dispatch(getReviewsThunk(spotId)))
        .then(() => setIsLoaded(true))
    }, [dispatch]);

    let reviewButtons;
    if (reviewToUpdate) {
        reviewButtons =
                            <div>
                                <UpdateReviewFormModal reviewToUpdate={reviewToUpdate}/>
                                <DeleteReviewFormModal reviewToUpdate={reviewToUpdate}/>
                            </div>
    } else {
        reviewButtons =     <div>
                                <CreateReviewFormModal />
                            </div>
    }


return isLoaded && (
    <>
        <h1>SpotDetails</h1>
        <h2>{spot.name}</h2>
        <h3>{spot.city}</h3>

        {reviewButtons}

        <div className="get-reviews-container">
            {allReviews.map(review => (
                <div key={review.id} className="individual-review-container">
                    <div>Review: {review.review}</div>
                    <div>Stars: {review.stars}</div>
                </div>
            ))}
        </div>
        {/* <DeleteReviewForm /> */}
        <UpdateSpotFormModal />
        <DeleteButton setIsLoaded={setIsLoaded}/>

    </>
    )
};

export default SpotDetails;

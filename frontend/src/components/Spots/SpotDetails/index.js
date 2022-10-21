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
import DeleteSpotFormModal from "../DeleteSpotFormModal";
import CreateSpotFormModal from "../CreateSpotFormModal";

const SpotDetails = () => {
    const   dispatch        = useDispatch();
    const { spotId }        = useParams();

    const [ isLoaded, setIsLoaded ] = useState(false);

    const   spots           = useSelector(state => state.spots);
    const   allSpots        = Object.values(spots)
    const   spot            = spots[spotId];

    console.log("THIS IS THE ALL SPOTS ARRAY", allSpots);
    console.log("SPOTS OF SPOT ID ", spots)
    console.log('THIS IS THE SPOT: ', spot)

    const   reviews         = useSelector(state => state.reviews);
    const   allReviews      = Object.values(reviews);

    const   sessionUser     = useSelector(state => state.session.user);
    const   reviewToUpdate  =  sessionUser ? allReviews.find(review => review.userId === sessionUser.id) : undefined;
    const   spotToUpdate    =  sessionUser ? allSpots.find(spot => spot.ownerId === sessionUser.id) : undefined;

    console.log('THIS SESSION USER IS ', sessionUser)


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

    let spotButtons;
    if (spotToUpdate) {
        spotButtons =
                            <div>
                                <UpdateSpotFormModal spotToUpdate={spotToUpdate}/>
                                <DeleteSpotFormModal spotToUpdate={spotToUpdate}/>
                            </div>
    }
    // else {
    //     spotButtons =     <div>
    //                             <CreateSpotFormModal />
    //                         </div>;
    // }

return isLoaded && (
    <>
        <h1>SpotDetails</h1>
        <h2>{spot.name}</h2>
        <img className="image-for-spot-id" src={spot.SpotImages[0].url} alt="spot-image-by-spot-id"></img>
        {/* <img src="smiley.gif" alt="Smiley face" width="42" height="42" style="vertical-align:middle;margin:0px 50px"></img> */}
        <h3>{spot.city}, {spot.state}</h3>
        <h4>${spot.price} per night</h4>

        {spotButtons}
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
        {/* <UpdateSpotFormModal />
        <DeleteButton setIsLoaded={setIsLoaded}/> */}

    </>
    )
};

export default SpotDetails;

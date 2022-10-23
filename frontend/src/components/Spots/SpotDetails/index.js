import { useEffect, useState }          from "react";
import { useDispatch, useSelector }     from "react-redux";
import { useParams }                    from "react-router-dom";
import { getOneSpotThunk }              from "../../../store/spots";
import { getReviewsThunk }              from "../../../store/reviews";
import   CreateReviewFormModal          from "../../Reviews/CreateReviewFormModal";
import   UpdateSpotFormModal            from "../UpdateSpotFormModal";
import   UpdateReviewFormModal          from "../../Reviews/UpdateReviewFormModal";
import   DeleteSpotFormModal            from "../DeleteSpotFormModal";
import   DeleteReviewFormModal          from "../../Reviews/DeleteReviewModal";
import                                       "./SpotDetails.css";

const SpotDetails = () => {
    const   dispatch   = useDispatch();
    const { spotId }   = useParams();
    const [ isLoaded, setIsLoaded ] = useState(false);

    const   sessionUser     = useSelector(state => state.session.user);     // OBJ | CURRENT SESSION USER | WHO IS LOGGED IN


    const   allSpotsObj     = useSelector(state => state.spots);            // OBJ OF OBJS | ALL SPOTS
    const   allSpotsArr     = Object.values(allSpotsObj)                    // ARR OF OBJS | ALL SPOTS
    const   currentSpotObj  = allSpotsArr.find(spot => spot.id === parseInt(spotId));      // OBJ | CURRENT SPOT

    const   currentSpotReviewsObj   = useSelector(state => state.reviews);      // OBJ OF OBJS | REVIEWS FOR THE CURRENT SPOT DETAILS PAGE
    const   currentSpotReviewsArr   = Object.values(currentSpotReviewsObj);     // ARR OF OBJS | REVIEWS FOR THE CURRENT SPOT DETAILS PAGE

    // const   spotToUpdate    =  sessionUser ? allSpotsArr.find(spot => spot.ownerId === sessionUser.id) : undefined;
    // const   spotToUpdate    =  allSpotsArr.find(spot => spot.ownerId === sessionUser.id);
    const   reviewToUpdate  =  sessionUser ? currentSpotReviewsArr.find(review => review.userId === sessionUser.id) : undefined;

    // CONDITIONAL RENDERING CONSOLE LOGS | SESSION USER | OWNER ID
    console.log('The Current Session User as an OBJECT | sessionUser: ', sessionUser);
    console.log("The Current Seesion User ID as a NUMBER | sessionUser.id: ", sessionUser.id);
    // console.log("The Current Spot Owner ID as a NUMBER | currentSpotObj.ownerId: ", currentSpotObj.ownerId);

    // CONDITIONAL RENDERING CONSOLE LOGS | UPDATE AND DELETE SPOT
    console.log("spotId based on useParams | SPOTID:", spotId)
    console.log("All Spots Information as an OBJECT of Objects of Spots by SpotID | allSpotsObj: ", allSpotsObj);
    console.log("All Spots Information as an ARRAY of Objects of Spots by SpotID | allSpotsArr: ", allSpotsArr);
    console.log("Current spot based on the :spotId as an OBJECT in URL of the SpotDetailsPage | currentSpotObj: ", currentSpotObj);

    // CONDITIONAL RENDERING CONSOLE LOGS | UPDATE AND DELETE REVIEW
    console.log("All Reviews for current spot as an OBJECT of objects | currentSpotReviewsObj: ", currentSpotReviewsObj);
    console.log("All Reviews for current spot as an ARRAY of objects | currentSpotReviewsArr: ", currentSpotReviewsArr);
    console.log("All Spots Information as an ARRAY of Objects of Spots by SpotID | allSpotsArr: ", allSpotsArr);
    console.log("Current spot based on the :spotId as an OBJECT in URL of the SpotDetailsPage | currentSpotObj: ", currentSpotObj);

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
    if (currentSpotObj?.ownerId === sessionUser.id) {
        spotButtons =
                            <div>
                                <UpdateSpotFormModal currentSpotObj={currentSpotObj}/>
                                <DeleteSpotFormModal currentSpotObj={currentSpotObj}/>
                                {/* <UpdateSpotFormModal spotToUpdate={spotToUpdate}/>
                                <DeleteSpotFormModal spotToUpdate={spotToUpdate}/> */}
                            </div>
    }
    // else {
    //     spotButtons =     <div>
    //                             <CreateSpotFormModal />
    //                         </div>;
    // }

return isLoaded && (
    <>
        {/* <h1>SpotDetails</h1> */}
        <div className='spot-detail-title-container'>
            <div id='spot-title'>{currentSpotObj.name}</div>
            <div id='spot-title-info'>
                <i class="fa-solid fa-star">{currentSpotObj.avgStarRating}</i>
                <i class="fa-solid fa-circle-small">{currentSpotObj.numReviews} Reviews</i>
                <i class="fa-solid fa-circle-small">{currentSpotObj.city}, {currentSpotObj.state}, {currentSpotObj.country}</i>
            {/* < {currentSpotObj.city}, {currentSpotObj.state} > */}
            </div>
        </div>

        <div className="spot-images-grid">
            <img class="spot-images-grid-col-2 spot-images-grid-row-2"id="spot-img-1" src={currentSpotObj.SpotImages[0].url} alt="spot-image-inside-grid-1"></img>
            <img id="spot-img-2" src={currentSpotObj.SpotImages[1].url} alt="spot-image-inside-grid-2"></img>
            <img id="spot-img-3" src={currentSpotObj.SpotImages[2].url} alt="spot-image-inside-grid-3"></img>
            <img id="spot-img-4" src={currentSpotObj.SpotImages[3].url} alt="spot-image-inside-grid-4"></img>
            <img id="spot-img-5" src={currentSpotObj.SpotImages[4].url} alt="spot-image-inside-grid-5"></img>
        {/* <img src="smiley.gif" alt="Smiley face" width="42" height="42" style="vertical-align:middle;margin:0px 50px"></img> */}
        </div>

        <div className="spot-detail-info-container">
            <div id="spot-detail-info">
                <h3>Treehouse hosted by {currentSpotObj.Owner.firstName}</h3>
                <h4>${currentSpotObj.price} per night</h4>
            </div>

            <div id="spot-detail-description">
                <h4>About {currentSpotObj.name}</h4>
                <>{currentSpotObj.description}</>
            </div>
        </div>

        <div className="reviews-container">
            <div className="reviews-of-spot">
                <h4>Reviews</h4>
                {currentSpotReviewsArr.map(review => (
                    <div key={review.id} className="individual-review-container">
                        {/* {console.log('Review for current Spot as an OBJECT: ', review)} */}
                        <div>{review.User.firstName}</div>
                        {/* <div>{review.createdAt}</div>       FIND WAY TO CONVERT INTO MONTH YEAR */}
                        <div>{review.review}</div>
                        <div>{review.stars} <i class="fa-solid fa-star"></i></div>
                    </div>
                ))}
            </div>

            <div className='review-buttons'>
                    {spotButtons}
                    {reviewButtons}
            </div>
        </div>
        {/* <DeleteReviewForm /> */}
        {/* <UpdateSpotFormModal />
        <DeleteButton setIsLoaded={setIsLoaded}/> */}
    </>
    )
};

export default SpotDetails;

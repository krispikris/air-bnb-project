import { useEffect, useState }                    from "react";
import { useDispatch, useSelector }     from "react-redux"
import { useHistory, useParams }        from "react-router-dom";
import { getOneSpotThunk }              from "../../store/spots";
import { NavLink }                      from "react-router-dom";
import UpdateSpotFormModal              from "../UpdateSpotFormModal";
import DeleteButton                     from "../DeleteButton/DeleteButton";
import                                       "./SpotDetails.css";

const SpotDetails = () => {
    const dispatch = useDispatch();
    console.log('THIS IS PARAMS: ', useParams())
    const { spotId } = useParams();

    const [isLoaded, setIsLoaded] = useState(false);

    const spots = useSelector(state => state.spots);
    const spot = spots[spotId];

    console.log("TTHIS IS SPOTS: ", spots)
    console.log("THIS IS SPOT :", spot)
    // console.log(state);
    // console.log('THIS IS THE SPOTS VARIABLE: ', spots);

    // const allSpots = Object.values(spots);
    // console.log('THIS IS ALL THE SPOTS ', allSpots)

    useEffect(() => {
        dispatch(getOneSpotThunk(spotId)).then(() => {
            setIsLoaded(true);
        });
    }, [dispatch]);

return isLoaded && (
    <>
        <h1>SpotDetails</h1>
        <h2>{spot.name}</h2>
        <h3>{spot.city}</h3>
        <UpdateSpotFormModal />
        <DeleteButton setIsLoaded={setIsLoaded}/>

    </>
)
}

export default SpotDetails;

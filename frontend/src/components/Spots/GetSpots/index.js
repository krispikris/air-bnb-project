import { useEffect }                    from "react";
import { useDispatch, useSelector }     from "react-redux"
import { getAllSpotsThunk }             from "../../../store/spots";
import { NavLink }                      from "react-router-dom";
import                                       "./GetSpots.css";

const GetSpots = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => {
        return state.spots;
    });

    // console.log('THIS IS THE SPOTS VARIABLE: ', spots);

    const allSpots = Object.values(spots);
    console.log('This is all the Spots in an Array ', allSpots)

    useEffect(() => {
        dispatch(getAllSpotsThunk());
    }, [dispatch]);

    return (
        <>
        <div className='all-spots-wrap'>
            <div className="all-spots-homepage-container">

                {allSpots.map(spot => (
                    <div key={spot.id} className='individual-spot-container'>
                        <NavLink to={`/spots/${spot.id}`}>
                            <img className='spot-card'
                                 src={spot?.previewImage}
                                 alt='one-spot-card'/>

                            <div className='spot-description-container'>
                                <div id='spot-description-left'>
                                    <div id='spot-prop-1'>{spot.name}</div>
                                    <div id='spot-prop-2'>{spot.city}, {spot.state}</div>
                                </div>

                                <div id='spot-description-right'>
                                    <div id='spot-prop-3'><i class="fa-solid fa-star"></i> {spot.avgRating.toFixed(2)}</div>
                                    <div id='spot-prop-4'>${spot.price} per night</div>
                                </div>
                            </div>
                        </NavLink>

                    </div>
                ))}
            </div>
        </div>

        </>
    )
}

export default GetSpots;

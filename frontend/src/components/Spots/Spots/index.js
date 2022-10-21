import { useEffect }                    from "react";
import { useDispatch, useSelector }     from "react-redux"
import { getAllSpotsThunk }             from "../../../store/spots";
import { NavLink }                      from "react-router-dom";
// import                                       "./Spots.css ";

const Spots = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => {
        return state.spots;
    });

    // console.log('THIS IS THE SPOTS VARIABLE: ', spots);

    const allSpots = Object.values(spots);
    // console.log('THIS IS ALL THE SPOTS ', allSpots)

    useEffect(() => {
        dispatch(getAllSpotsThunk());
    }, [dispatch]);

    return (
        <>
            <div className="spots-homepage-container">

                {allSpots.map(spot => (
                    <div key={spot.id} className='individual-spot-container'>
                        <NavLink to={`/spots/${spot.id}`}><img className='new-spot-image' src={spot?.previewImage} /></NavLink>
                        <div className='spot-name'>
                            <div className='name'><b>{spot.name}</b></div>
                        </div>
                    </div>
                ))}
                </div>






        </>
    )
}

export default Spots;

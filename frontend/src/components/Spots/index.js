import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllSpots } from "../../store/spots";
import './Spots.css'
import { NavLink } from "react-router-dom";

const Spots = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => {
        return state.spots;
    });
    const allSpots = Object.values(spots.allSpots);

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <>
            <div className="spots-homepage-container">

                {allSpots.map(spot => (
                    <div className='individual-spot-container'>
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

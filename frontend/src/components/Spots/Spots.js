import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllSpots } from "../../store/spots";

const Spots = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => {
        return state.spots;
    });

    useEffect(() => {
        dispatch(getAllSpots());
        // dispatch(createNewSpot());
    }, [dispatch]);

    return (
        <div>
            {Object.values(spots).map(spot => (
                <img
                    key={spot?.id}
                    className='spotsImg'
                    src={spot?.previewImage} >
                </img>
            ))}
        </div>
    )
}

export default Spots;

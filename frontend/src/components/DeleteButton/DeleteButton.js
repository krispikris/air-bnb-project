import    React, { useState }                       from "react";
import  { useDispatch }                             from "react-redux";
import  { useHistory, useParams }                   from "react-router-dom";
import  { deleteSpotThunk }                         from "../../store/spots";
import                                                   "./DeleteButton.css";

const DeleteButton = ({setIsLoaded}) => {
    // const { setIsLoaded } = props;
    const history       = useHistory();
    const dispatch      = useDispatch();
    const { spotId }    = useParams();

    const deleteSubmit = async (e) => {
        e.preventDefault();
        setIsLoaded(false);

        // console.log('---------: ', props);

        await dispatch(deleteSpotThunk(spotId))
        return history.push('/');
    }

return (
    <>
        <form
            className='delete-spot-form'
            onSubmit={deleteSubmit}
            >

            <button type="submit">Delete Spot</button>
        </form>
    </>
)

};

export default DeleteButton;

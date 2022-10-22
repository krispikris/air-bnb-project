// frontend/src/components/DeleteReviewModal/DeleteReviewForm.js
import    React                 from "react";
import  { useDispatch }         from "react-redux";
import  { deleteSpotThunk }     from "../../../store/spots";
import                               "./DeleteSpotForm.css";

const DeleteSpotForm = ({setShowModal, spotToUpdate}) => {
    const dispatch          = useDispatch();

    // console.log('======', SpotToUpdate);

    const deleteSpot = async (e) => {
        e.preventDefault();

        await dispatch(deleteSpotThunk(spotToUpdate.id));
        setShowModal(false);
    }

return (
    <>
        <form
            className='delete-spot-form'
            onSubmit={deleteSpot}
            >
            <h3>Are you sure you want to delete your Spot?</h3>
            <button type="submit">Delete Spot</button>
        </form>
    </>
    )
};

export default DeleteSpotForm;

// frontend/src/components/UpdateSpotModal/UpdateSpotForm.js
import    React, { useState }               from "react";
import  { useDispatch, useSelector }        from "react-redux";
import  { useParams }                       from "react-router-dom";
import  { updateSpotThunk }                 from "../../../store/spots";
import                                           "./UpdateSpotFormModal.css";

const UpdateSpotForm = ({setShowModal}) => {
    const dispatch                          = useDispatch();
    const { spotId }                        = useParams();

    const spot = useSelector(state => state.spots[parseInt(spotId)]);

    const [address, setAddress]             = useState(spot.address);
    const [city, setCity]                   = useState(spot.city);
    const [state, setState]                 = useState(spot.state);
    const [country, setCountry]             = useState(spot.country);
    const [name, setName]                   = useState(spot.name);
    const [description, setDescription]     = useState(spot.description);
    const [price, setPrice]                 = useState(spot.price);
    const [imageURL, setimageURL]           = useState(spot.imageURL);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let updatedSpotFormInputs = {
            address,
            city,
            state,
            country,
            name,
            description,
            price
        };

        await dispatch(updateSpotThunk(updatedSpotFormInputs, spotId));
        setShowModal(false);
    };

return (
    <form
        className='update-spot-form'
        onSubmit={handleSubmit}
        >
        <label id="update-spot-title">UPDATE YOUR SPOT</label>

        <label id="update-spot-input-title">Address</label>
            <input id="update-spot-input"
            type="text"
            name="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            />

        <label id="update-spot-input-title">City</label>
            <input id="update-spot-input"
            type="text"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
            />

        <label id="update-spot-input-title">State</label>
            <input id="update-spot-input"
            type="text"
            name="state"
            value={state}
            onChange={e => setState(e.target.value)}
            />

        <label id="update-spot-input-title">Country</label>
            <input id="update-spot-input"
            type="text"
            name="country"
            value={country}
            onChange={e => setCountry(e.target.value)}
            />

        <label id="update-spot-input-title">Name</label>
            <input id="update-spot-input"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            />

        <label id="update-spot-input-title">Description</label>
            <input id="update-spot-input"
            type="text"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />

        <label id="update-spot-input-title">Price</label>
            <input id="update-spot-input"
            type="text"
            name="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            />

        <label id="update-spot-input-title">Update Image URL</label>
            <input id="update-spot-input"
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={e => setimageURL(e.target.value)}
            />

        <button id="update-spot-submit" type="submit">Update Spot</button>

        </form>
    )
};

export default UpdateSpotForm;

// frontend/src/components/UpdateSpotModal/UpdateSpotForm.js
import    React, { useState }       from "react";
import  { useDispatch }             from "react-redux";
import  { useHistory, useParams }   from "react-router-dom";
import  { updateSpotThunk }         from "../../store/spots";
import                                   "./UpdateSpotFormModal.css";

const UpdateSpotForm = () => {
    const history                           = useHistory();
    const dispatch                          = useDispatch();
    const { spotId }                        = useParams();

    const [address, setAddress]             = useState('');
    const [city, setCity]                   = useState('');
    const [state, setState]                 = useState('');
    const [country, setCountry]             = useState('');
    const [name, setName]                   = useState('');
    const [description, setDescription]     = useState('');
    const [price, setPrice]                 = useState('');
    const [imageURL, setimageURL]           = useState('');

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
        return history.push(`/spots/${spotId}`);
    };

return (
    <form
        className='update-spot-form'
        onSubmit={handleSubmit}
        >

        <label>
            Address
            <input
            type="text"
            name="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            />
        </label>

        <label>
            City
            <input
            type="text"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
            />
        </label>

        <label>
            State
            <input
            type="text"
            name="state"
            value={state}
            onChange={e => setState(e.target.value)}
            />
        </label>

        <label>
            Country
            <input
            type="text"
            name="country"
            value={country}
            onChange={e => setCountry(e.target.value)}
            />
        </label>

        <label>
            Name
            <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
        </label>

        <label>
            Description
            <input
            type="text"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
        </label>

        <label>
            Price
            <input
            type="text"
            name="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            />
        </label>

        <label>
            Update Image URL
            <input
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={e => setimageURL(e.target.value)}
            />
        </label>

        <button type="submit">Update Spot</button>

        </form>
    )
};

export default UpdateSpotForm;

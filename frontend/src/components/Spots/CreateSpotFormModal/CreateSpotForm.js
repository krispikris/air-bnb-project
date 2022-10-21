import    React, { useState }                       from "react";
import  { useDispatch }                             from "react-redux";
import  { useHistory }                              from "react-router-dom";
import  { createSpotThunk, createSpotImageThunk }   from "../../../store/spots";
import                                                   "./CreateSpotFormModal.css";

const CreateSpotForm = ({setShowModal}) => {
    const history = useHistory();
    const dispatch = useDispatch();

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

        let spotFormInputs = {
                address,
                city,
                state,
                country,
                name,
                description,
                price
        };

        const newSpot = await dispatch(createSpotThunk(spotFormInputs));

        // console.log('THIS IS THE NEW SPOT SHOULD BE AN OBJECT :', newSpot);

        if (newSpot) {
            const img = ({
                url: imageURL,
                preview: true
            })

            await dispatch(createSpotImageThunk(img, newSpot.id));
            setShowModal(false)
            return history.push(`/spots/${newSpot.id}`);
        };
    };

return (
    <form
        className='create-new-spot-form'
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
            Upload Image URL
            <input
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={e => setimageURL(e.target.value)}
            />
        </label>

        <button type="submit">Become a Host</button>

        </form>
    )
}

export default CreateSpotForm;

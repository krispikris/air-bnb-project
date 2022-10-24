import    React, { useState }                       from "react";
import  { useDispatch }                             from "react-redux";
import  { useHistory }                              from "react-router-dom";
import  { createSpotThunk, createSpotImageThunk, getOneSpotThunk }   from "../../../store/spots";
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

            await dispatch(createSpotImageThunk(img, newSpot.id))
            await dispatch(getOneSpotThunk(newSpot.id))
            setShowModal(false)
            return history.push(`/spots/${newSpot.id}`);
        };
    };

return (
    <form
        className='create-new-spot-form'
        onSubmit={handleSubmit}
        >

      <label id='become-a-host-form-title'>BECOME A HOST</label>
      <label id="welcome-back-to-treebnb-host">Welcome to back to Treebnb!</label>

        <label id="host-input-title">Address</label>
            <input id="host-form-inputs"
            type="text"
            name="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            />

        <label id="host-input-title">City</label>
            <input id="host-form-inputs"
            type="text"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
            />

        <label id="host-input-title">State</label>
            <input id="host-form-inputs"
            type="text"
            name="state"
            value={state}
            onChange={e => setState(e.target.value)}
            />

        <label id="host-input-title">Country</label>
            <input id="host-form-inputs"
            type="text"
            name="country"
            value={country}
            onChange={e => setCountry(e.target.value)}
            />

        <label id="host-input-title">Name</label>
            <input id="host-form-inputs"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            />

        <label id="host-input-title">Description</label>
            <input id="host-form-inputs"
            type="text"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />

        <label id="host-input-title">Price</label>
            <input id="host-form-inputs"
            type="text"
            name="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            />

        <label id="host-input-title">Upload Image URL</label>
            <input id="host-form-inputs"
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={e => setimageURL(e.target.value)}
            />

        <button className='host-submit-button' type="submit">Become a Host</button>

        </form>
    )
}

export default CreateSpotForm;

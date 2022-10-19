import { useState, useEffect }          from "react";
import { useHistory }                   from 'react-router-dom';
import { useDispatch }                  from "react-redux";
import { createNewSpot, createImage}    from "../../store/spots";

const SpotForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [address, setAddress]             = useState('');
    const [city, setCity]                   = useState('');
    const [state, setState]                 = useState('');
    const [country, setCountry]             = useState('');
    // const [lat, setLat]                     = useState('');
    // const [lng, setLng]                     = useState('');
    const [name, setName]                   = useState('');
    const [description, setDescription]     = useState('');
    const [price, setPrice]                 = useState('');
    const [imageURL, setimageURL]           = useState('');

    // PUT VALIDATIONS HERE

    const handleSubmit = async e => {
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

        const newSpot = await dispatch(createNewSpot(spotFormInputs));
        if (newSpot) {
            const img = ({
                url: imageURL,
                preview: true
            })

            console.log('THIS IS A NEW SPOT', newSpot)
            // await dispatch(createImage(newSpot.id, img));
            await dispatch(createImage(newSpot.id, img))
            return history.push(`/spots/${newSpot.id}`)
            // history.push(`/spots/${newSpot.id}`);          // history.push('/spots/:spotId')
        }
    }

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

        {/* <label>
            Latitude
            <input
            type="text"
            name="lat"
            value={lat}
            onChange={e => setLat(e.target.value)}
            />
        </label>

        <label>
            Longitude
            <input
            type="text"
            name="lng"
            value={lng}
            onChange={e => setLng(e.target.value)}
            />
        </label> */}

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

        <button
            type="submit"
            >
                Create New Spot
        </button>

        </form>
    )
}

export default SpotForm;

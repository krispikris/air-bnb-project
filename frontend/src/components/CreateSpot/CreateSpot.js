import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { createNewSpot } from "../../store/spots";

const CreateSpot = () => {
    const history = useHistory();
    const [ownerId, setOwnerId] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        history.push('/');
        // history.push('/spots/:spotId')
        // PUT VALIDATIONS HERE
    }

return (
    <form
        classname='create-new-spot-form'
        onSubmit={onSubmit}
        >

        <label>
            Owner
            <input
            type="text"
            name="owner"
            value={ownerId}
            onChange={e => setOwnerId(e.target.value)}
            />
        </label>

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

        </form>
    )
}

export default CreateSpot;

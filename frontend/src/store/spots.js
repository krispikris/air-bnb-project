import { csrfFetch } from "./csrf";

// ACTIONS
const GET_SPOTS     = 'spots/getSpots';
const CREATE_SPOT   = 'spots/createSpot'

const getSpots = (spot) => {
    return {
        type: GET_SPOTS,
        payload: spot
    };
};

const createSpot = (spot) => {
    return {
        type: CREATE_SPOT,
        payload: spot
    }
}

// THUNKS
export const getAllSpots = () => async (dispatch) => {
    console.log('getAllSpots')
    const response = await fetch('/api/spots');

    if (response.ok) {
        const data = await response.json();
        dispatch(getSpots(data))
        return data;
    };
};

export const createNewSpot = (spot, image) => async (dispatch) => {
    // console.log('createNewSpot')
    // console.log('THIS IS THE IMAGE', image)
    console.log('THIS IS SPOT',spot);
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(spot)
    })

    const spotIdURL = response.json();
    console.log('THIS IS THE SPOTID URL', spotIdURL);

    if (response.ok) {
        let data = {};
        // const resData = await response.json();
        // const previewImage = await findPreviewImage.json();

        let imageObj = {id: spotIdURL, url: image};
        // data = {...resData}
        // data = {...resData, previewImage}
        console.log('THIS IS THE DATA', data);
        dispatch(createSpot(data));
        dispatch(addImageToNewSpot())
        return data;
    };
};

export const addImageToNewSpot = (image) => async (dispatch) => {
    const { id,  url} = image;
    const findPreviewImage = await csrfFetch(`/api/spots/${id}/images`, {
        method: 'POST',
        body: JSON.stringify({
            url,
            preview: true
        })
    })
}

// REDUCER
const initialState = { spot: null };
    const spotsReducer = (state = initialState, action) => {
        switch (action.type) {
            case GET_SPOTS:
                return {...action.payload.Spots};
                // const newState = {...state}
                // return {...newState, ...action.spot}
                // return {...state, Spots}
            // case CREATE_SPOT:
            //     const newState = {...state}
            //     return newState
            case CREATE_SPOT:
                let createdSpot = {...action.payload};
                createdSpot = {...state, createdSpot};
                return createdSpot;
                default:
                    return state;
                }
            }

// ORDER: THUNK, ACTION, REDUCER
    // THUNK: PULLS INFORMATION
        // ACTION: STORE THAT DATA IN THE PAYLOAD
            // TYPE: WHAT IS HAPPENING WITH THE PAYLOAD (BANANA-BLE)
    // REDUCER: CREATES A COPY OF THE STATE TO REPLACE THE DEFAULT OR OLD STATE (SIMILAR TO MIDDLEWARE)

export default spotsReducer;

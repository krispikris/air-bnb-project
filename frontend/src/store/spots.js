import { csrfFetch } from "./csrf";

// ACTIONS
const GET_SPOTS             = 'spots/getSpots';
const CREATE_SPOT           = 'spots/createSpot';
const CREATE_SPOT_IMAGE     = 'spots/createSpotImage';

const getSpots = (spots) => {
    return {
        type: GET_SPOTS,
        spots
    };
};

const createSpot = (spot) => {
    return {
        type: CREATE_SPOT,
        spot
    }
}

const createSpotImage = (image) => {
    return {
        type: CREATE_SPOT_IMAGE,
        image
    };
};

// THUNKS
export const getAllSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');

    if (response.ok) {
        const spots = await response.json();
        dispatch(getSpots(spots))
        return spots;
    };
};

export const createNewSpot = (spot) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(spot)
    });

    if (response.ok) {
        const createdSpot = await response.json();
        dispatch(createSpot(createdSpot))
        return createdSpot
    };
};

export const createImage = (spotId, image) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
            method: 'POST',
            body: JSON.stringify(image)
        })


        // if (response.ok) {
        //     const img = await response.json();
        //     dispatch(createSpotImage(img))
        //     return img;
        // }
    }
    // const spotIdURL = response.json();
    // let imageObj = {id: spotIdURL, url: image};

// REDUCER
const initialState = { allSpots: {}, singleSpot: {} };

const spotsReducer = (state = initialState, action) => {
        const newState = Object.assign({}, state);

        switch (action.type) {
            case GET_SPOTS:
                const allSpots = {};
                action.spots.Spots.forEach(spot => {
                    allSpots[spot.id] = spot;
                });

                return {allSpots, singleSpot: { spotImages: [] }};

            case CREATE_SPOT:
                const newSpot = action.spot;
                newState.singleSpot[action.spot.id] = newSpot;
                return newState;

                // newState.action.spot;
                // newState = {
                //     singleSpot: {
                //         [action.spot.id] : newSpot
                //     }
                // }

            case CREATE_SPOT_IMAGE: {
                // newState = {...state};
                newState.singleSpot.SpotImages = [action.spotId.previewImage]
                return {...newState}
            }
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

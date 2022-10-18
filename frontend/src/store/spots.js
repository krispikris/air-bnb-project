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
    const response = await fetch('/api/spots');

    if (response.ok) {
        const data = await response.json();
        dispatch(getSpots(data))
        return data;
    };
};

export const createNewSpot = (spot) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(spot),
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(createSpot(data));
        return response;
    };
};

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

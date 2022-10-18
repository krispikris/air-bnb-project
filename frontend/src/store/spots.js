import { csrfFetch } from "./csrf";

// ACTIONS
const GET_SPOTS = 'spots/getSpots';

const getSpots = (spot) => {
    return {
        type: GET_SPOTS,
        payload: spot
        // spot
    };
};

// THUNKS
export const getAllSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');

    if (response.ok) {
        const data = await response.json();
        dispatch(getSpots(data))
        return data;
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

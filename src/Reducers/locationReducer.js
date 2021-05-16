import { REQUEST_LOCATION, REQUEST_LOCATION_SUCCESS, REQUEST_LOCATION_ERROR } from "../Actions/locationAction";


const initialState = {
    loading: true,
    locationDetails: null,
    error: false,
}



export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LOCATION:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case REQUEST_LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                locationDetails: action.payload,
                error: false,
            }
        case REQUEST_LOCATION_ERROR:
            return {
                ...state,
                loading: false,
                locationDetails: null,
                error: action.payload
            }
    
        default:
            return state
    }
}



export default locationReducer;




import { REQUEST_BACKGROUND_IMAGE, REQUEST_BACKGROUND_IMAGE_SUCCESS, REQUEST_BACKGROUND_IMAGE_FAILURE } from "../Actions/backgroundImageAction";



const initialState = {
    loading: true,
    backgroundImage : null,
    error: false,
}




export const backgroundImageReducer = (state = initialState, action) => {

    switch (action.type) {
        case REQUEST_BACKGROUND_IMAGE:
            return {
                ...state,
                loading: true,
                backgroundImage: null,
                error: false,
            }

        case REQUEST_BACKGROUND_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                backgroundImage: action.payload,
                error: false,
            }

        case REQUEST_BACKGROUND_IMAGE_FAILURE:
            return {
                ...state,
                loading: false,
                backgroundImage: null,
                error: action.payload,
            }
        
            default:
                return state;
    }
}



export default backgroundImageReducer;
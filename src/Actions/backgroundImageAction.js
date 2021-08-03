export const REQUEST_BACKGROUND_IMAGE = 'REQUEST_BACKGROUND_IMAGE';
export const REQUEST_BACKGROUND_IMAGE_SUCCESS = 'REQUEST_BACKGROUND_IMAGE_SUCCESS';
export const REQUEST_BACKGROUND_IMAGE_FAILURE = 'REQUEST_BACKGROUND_IMAGE_FAILURE';



export const requestBackgroundImage = () => {
    return {
        type: REQUEST_BACKGROUND_IMAGE,
    };
}

export const requestBackgroundImageSuccess = (image) => {
    return {
        type: REQUEST_BACKGROUND_IMAGE_SUCCESS,
        payload: image,
    };
}

export const requestBackgroundImageFailure = (error) => {
    return {
        type: REQUEST_BACKGROUND_IMAGE_FAILURE,
        payload: error,
    };
}

export const getBackgroundImage = () => {
    return async (dispatch) => {
        dispatch(requestBackgroundImage());
        try {
            let url = `https://api.unsplash.com/photos/random/?client_id=8mb5eGQc4973c_ChY-M_D1Zdynhimy4Ompb0Lam36Hw&query=technology`
            const response = await fetch(url);
            const data = await response.json();
            dispatch(requestBackgroundImageSuccess(data));

        } catch (error) {
            dispatch(requestBackgroundImageFailure(error))
        }
    }
}
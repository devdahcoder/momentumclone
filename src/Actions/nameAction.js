export const ADD_NAME = "ADD_NAME";



export const addName = (name) => {
    return {
        type: ADD_NAME,
        payload: name,
    }
}
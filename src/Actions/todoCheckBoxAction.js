export const CHECK_TODO = "CHECK_TODO";
export const UNCHECK_TODO = "UNCHECK_TODO";


export const checkTodo = () => {
    return {
        type: CHECK_TODO,
    };
}

export const uncheckTodo = () => {
    return {
        type: UNCHECK_TODO,
    };
}
export const TIME_DISPLAY_24_HOURS = "TIME_DISPLAY_24_HOURS";
export const TIME_HIDE_24_HOURS = "TIME_HIDE_24_HOURS"


export const timeDisplay24Hours = () => {
    return {
        type: TIME_DISPLAY_24_HOURS,
    };
}

export const timeHide24Hours = () => {
    return {
        type: TIME_HIDE_24_HOURS,
    };
}

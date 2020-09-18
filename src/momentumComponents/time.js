import React from "react";

const time = ({getAmPm, getHour, getMinute}) => {

  const addZero = getMinute < 10 ? `0${getMinute}`: `${getMinute}`;

    return (
      <div>
        {getHour}:{addZero}, {getAmPm}
      </div>
    );
}

export default time;
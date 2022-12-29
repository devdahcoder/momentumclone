import React from 'react'

const weather = ({
    location, 
    icon, 
    locationTemperature, 
}) => {
    return (
      <div>
        <img src={icon} alt={icon} />
        {location}
        {locationTemperature}
      </div>
    );
}

export default weather

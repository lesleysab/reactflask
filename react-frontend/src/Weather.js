import React from "react";

const Weather = props => {
    return (
        <div className="weather__info">
            {props.temperature && <p className="weather__city">Today in {props.city}</p>}

            {props.temperature && <p className="weather__key">Temperature: {Math.round(props.temperature)}&deg;F</p>}
            {props.description && <p className="weather__key">Conditions: {props.description.toUpperCase()}</p>}
            {props.error && <p className="error">{props.error}</p>}
        </div>
    );
};
export default Weather;
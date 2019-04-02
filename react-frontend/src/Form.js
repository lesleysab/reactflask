import React from "react";




const Form = props => {
    return (

        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Enter City" />
            <input type="text" name="country" placeholder="Enter Country" />
            <button type="primary">Get My Weather</button>
        </form>
    );
};
export default Form;
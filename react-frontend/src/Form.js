import React from "react";


const Form = props => {
    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Enter City" />
                <input type="text" name="country" placeholder="Enter Country" />
                <button>Get My Weather</button>
            </form>
        </div>
    );
};
export default Form;
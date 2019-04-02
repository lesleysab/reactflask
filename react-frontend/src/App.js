import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./Home";
import Form from "./Form";
import Weather from "./Weather";
import './index.css';



const API_KEY = "52c22aabd27dfb2bbb026631979c4c29";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`
    );
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please enter the correct city and country"
      });
    }
  };
  render() {
    return (

      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 home-container">
                  <Home />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



import React, { useState } from "react";
import axios from "axios";
import Context from "../Context";
import Header from "./Header";
import Tagline from "./Tagline";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import DateTime from "./DateTime";
import Error from "./Error";
import Footer from "./Footer";

//this file contains all the core functionality for this app

//it is the convention to make certain variables uppercase and anything you store your API KEYS inside of just tends to be uppercase ---> it is just a convention

const Main = () => {
  const [weather, setWeather] = useState();

  const [city, setCity] = useState();

  const [error, setError] = useState();

  /*this is the same as this:
  const weather = useState [0] ---> 'weather' is the name of our state
  const setWeather = useState [1] ---> 'setWeather' is the function that you can use in order to update the state | this second argument acts like the setState method in the Class Components */

  //this syntax is known as array destructuring in JavaScript

  const api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if (!location) return setError("Please enter location.");
    setWeather(null);
    const API_KEY = "8e0aa905ce144f49bf1a5f4c95149722";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    //axios is a promise-based library
    const response = await request;
    setWeather(response.data.main);
    console.log(response.data);
    setCity(response.data.name);
    console.log(response.Error);
    // setError(response);
  };
  weather && console.log(weather);

  // useEffect(() => {
  //   api_call();
  // }, []);
  // this empty array argument is going to make sure that this useEffect hook acts like the componentDidUpdate; it isn't really a good idea to compare hooks to life cycle methods: yes, they do behave similarly but they should be looked at as their own entity. So here we are telling this useEffect hook to only execute this api_call method when the Main component first renders onto the screen, and we are doing that by giving it a second argument, which is an empty array

  return (
    <div className="main">
      <Header />

      <Content>
        <DateTime />
        <Tagline />
        <Context.Provider value={{ api_call, weather, city, error }}>
          <WeatherSearch />

          {weather && <WeatherData />}
          {error && <Error error={error} />}
        </Context.Provider>
        <Footer />
      </Content>
    </div>
  );
};

export default Main;

import React, { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
//this file contains all the core functionality for this app

const API_KEY = "8e0aa905ce144f49bf1a5f4c95149722";

//it is the convention to make certain variables uppercase and anything you store your API KEYS inside of just tends to be uppercase ---> it is just a convention

const Main = () => {
  const api_call = async () => {
    const url = `api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${API_KEY}`;
    const request = axios.get(url); //axios is a promise-based library
    const response = await request;
    console.log(response);
  };

  useEffect(() => {
    api_call();
  });

  return (
    <div className="main">
      <Header />{" "}
    </div>
  );
};

export default Main;

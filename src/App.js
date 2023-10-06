import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

const App = () => {
  const weather = useWeather();

  console.log(weather);

  useEffect(() => {
    weather.fetchCurrentUserLocation();
  }, []);
  
  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
};

export default App;

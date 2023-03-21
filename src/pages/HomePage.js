import React from "react";
import { useState, useEffect } from "react";
import Search from "../component/Search";
import Weather from "../component/Weather";
import useFetchApi from "../useFetchApi";
import { findLocation } from "../location_list";

const HomePage = () => {
  const [currentCity, setCurrentCity] = useState("桃園市");
  const currentLocation = findLocation(currentCity) || {};
  const [weatherElement, fetchData] = useFetchApi(currentLocation);
  return (
    <div>
      <Search
        cityName={currentLocation.cityName}
        setCurrentCity={setCurrentCity}
        fetchData={fetchData}
        // searchCurrentWeather={() => {
        //   searchCurrentWeather(currentUrl);
        // }}
        // searchForecastWeather={() => {
        //   searchForecastWeather(forecastUrl);
        // }}
      />
      <Weather
        cityName={currentLocation.cityName}
        weatherElement={weatherElement}
        fetchData={fetchData}
      />
    </div>
  );
};

export default HomePage;

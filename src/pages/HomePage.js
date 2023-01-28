import React, { useState } from "react";
import Search from "../component/Search";
import Weather from "../component/Weather";
import { useEffect } from "react";

const HomePage = () => {
  // const [cityName, setInput] = useState("");
  // let [data, setData] = useState(null);
  // const [currentWeather, setCurrentWeather] = useState({
  //   observationTime: "2019-10-02 22:10:00",
  //   locationName: "臺北市",
  //   temperature: 27.5,
  //   windSpeed: 0.3,
  //   humid: 0.88,
  // });

  // const [forecastWeather, setForecastWeather] = useState({
  //   observationTime: "2019-10-02 22:10:00",
  //   locationName: "臺北市",
  //   description: "多雲時晴",
  //   temperature: 27.5,
  //   windSpeed: 0.3,
  //   humid: 0.88,
  // });

  const [weatherElement, setWeatherElement] = useState({
    observationTime: new Date(),
    locationName: "",
    humid: 0,
    temperature: 0,
    windSpeed: 0,
    description: "",
    weatherCode: 0,
    rainPossibility: 0,
    comfortability: "",
  });

  //fetch data when the page load
  useEffect(() => {
    searchCurrentWeather(currentUrl);
    searchForecastWeather(forecastUrl);
  }, []);

  let auth = "CWB-47D5B94A-D07D-422B-99B6-10CCFA9221EB";
  const currentUrl = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${auth}&locationName=臺北`;
  const forecastUrl = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${auth}&locationName=臺北`;

  //search data frpm api
  const searchCurrentWeather = async (dataUrl) => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => {
        const locationData = data.records.location[0];

        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (["WDSD", "TEMP", "HUMD"].includes(item.elementName)) {
              neededElements[item.elementName] = item.elementValue;
            }
            return neededElements;
          },
          {}
        );
        setWeatherElement((prevState) => ({
          ...prevState,
          observationTime: locationData.time.obsTime,
          locationName: locationData.locationName,
          temperature: weatherElements.TEMP,
          windSpeed: weatherElements.WDSD,
          humid: weatherElements.HUMD,
        }));
      });
  };
  const searchForecastWeather = async (dataUrl) => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => {
        const locationData = data.records.location[0];

        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (["Wx", "PoP", "CI"].includes(item.elementName)) {
              neededElements[item.elementName] = item.elementValue;
            }
            return neededElements;
          },
          {}
        );

        setWeatherElement((prevState) => ({
          ...prevState,
          description: weatherElements.Wx.parameterName,
          weatherCode: weatherElements.Wx.parameterValue,
          rainPossibility: weatherElements.PoP.parameterName,
          comfortability: weatherElements.CI.parameterName,
        }));
      });
  };

  return (
    <div>
      <Search
        searchCurrentWeather={() => {
          searchCurrentWeather(currentUrl);
        }}
        searchForecastWeather={() => {
          searchForecastWeather(forecastUrl);
        }}
      />
      <Weather
        weatherElement={weatherElement}
        setWeatherElement={setWeatherElement}
      />
    </div>
  );
};

export default HomePage;

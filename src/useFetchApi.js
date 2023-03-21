import React from "react";
import { useState, useEffect, useCallback } from "react";

let auth = "CWB-47D5B94A-D07D-422B-99B6-10CCFA9221EB";

//search data frpm api
const searchCurrentWeather = async (locationName) => {
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${auth}&locationName=${locationName}`
  )
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location[0];

      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (
            [
              "WDIR", //風向
              "WDSD", //風速
              "TEMP", //溫度
              "HUMD", //相對溼度
              "24R", //日累積雨量
              "H_FX", //最大陣風風速
              "H_XD", //最大陣風風向
              "H_F10", //最大平均風速
              "H_10D", //最大平均風向
              // "H_F10T", //平均風速發生時間
              "H_UVI", //紫外線指數
              "D_TX", //本日最高溫
              // "D_TXT", //本日最高溫發生時間
              "D_TN", //本日最低溫
              // "D_TNT", //本日最低溫發生時間
              "D_TS", //本日總日照時數
              "VIS", //能見度
              "Weather", //天氣現象描述
            ].includes(item.elementName)
          ) {
            neededElements[item.elementName] = item.elementValue;
          }
          return neededElements;
        },
        {}
      );
      return {
        observationTime: locationData.time.obsTime,
        locationName: locationData.locationName,
        windDirection: weatherElements.WDIR,
        currentTemperature: weatherElements.TEMP,
        windSpeed: weatherElements.WDSD,
        humid: weatherElements.HUMD,
        // rainfall: weatherElements.24R,
        maxWindSpeed: weatherElements.H_FX,
        maxWindDirection: weatherElements.H_XD,
        averageWindSpeed: weatherElements.H_F10,
        averageWindDirection: weatherElements.H_10D,
        uvi: weatherElements.H_UVI,
        maxTemprature: weatherElements.D_TX,
        miniTemprature: weatherElements.D_TN,
        sunShineTime: weatherElements.D_TS,
        visibility: weatherElements.VIS,
      };
    });
};
const searchForecastWeather = async (cityName) => {
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${auth}&locationName=${cityName}`
  )
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location[0];
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (["Wx", "PoP", "CI"].includes(item.elementName)) {
            neededElements[item.elementName] = item.time[0].parameter;
          }
          return neededElements;
        },
        {}
      );
      return {
        description: weatherElements.Wx.parameterName,
        weatherCode: weatherElements.Wx.parameterValue,
        rainPossibility: weatherElements.PoP.parameterName,
        comfortability: weatherElements.CI.parameterName,
      };
    });
};

const useFetchApi = (currentLocation) => {
  const { locationName, cityName } = currentLocation;
  const [weatherElement, setWeatherElement] = useState({
    observationTime: "",
    locationName: "",
    humid: 0,
    temperature: 0,
    windSpeed: 0,
    description: "",
    weatherCode: 0,
    rainPossibility: 0,
    comfortability: "",
  });

  const fetchData = useCallback(() => {
    const fetchingData = async () => {
      const [currentWeather, forecastWeather] = await Promise.all([
        searchCurrentWeather(locationName),
        searchForecastWeather(cityName),
      ]);

      setWeatherElement({
        ...currentWeather,
        ...forecastWeather,
        // isLoading: false,
      });
    };

    setWeatherElement((prevState) => ({
      ...prevState,
      // isLoading: true,
    }));

    fetchingData();
  }, [locationName, cityName]);

  //fetch data when the page load
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return [weatherElement, fetchData];
};

export default useFetchApi;

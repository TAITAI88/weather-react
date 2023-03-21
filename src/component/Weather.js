import React from "react";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Weather = (props) => {
  const { weatherElement, cityName } = props;
  const {
    observationTime,
    windDirection, //風向
    currentTemperature, //溫度
    windSpeed, //風速
    humid, //相對溼度
    uvi, //紫外線指數
    description,
    weatherCode,
    rainPossibility, //降雨機率
    comfortability, //舒適度

    visibility, //能見度
    sunShineTime, //本日總日照時數
    maxWindSpeed, //最大陣風風速
    maxWindDirection, //最大陣風風向
    averageWindSpeed, //最大平均風速
    averageWindDirection, //最大平均風向
    maxTemprature, //本日最高溫
    miniTemprature, //本日最低溫

    // isLoading,
  } = weatherElement;

  return (
    <div className="weather">
      <Container className="main">
        <div className="cityName">
          <h2>{cityName}</h2>
        </div>
        <div className="sec_01">
          <div className="overview">
            <div className="title">
              <p>Overview</p>
            </div>
            <div className="content">
              <p className="desc">{description}</p>
              <p className="temp">{currentTemperature} °C</p>
              <div className="rain">
                <img src={require("../images/rain.png")} alt="" />
                <p>降雨機率 : {rainPossibility}%</p>
              </div>
              <div className="windSpeed">
                <img src={require("../images/wind.png")} alt="airFlows" />
                <p>風速 : {windSpeed} m/s</p>
              </div>
              {/* <p className="windDirection">現在風向:{windDirection}</p> */}
              <p className="obsTime">觀測時間:{observationTime}</p>
            </div>
          </div>
        </div>
        <div className="sec_02">
          <div className="others">
            <div className="title">
              <p>Others</p>
            </div>
            <div className="content">
              <p className="humid">相對溼度 : {humid}</p>
              <p>紫外線 : {uvi}</p>
              {/* <p>天氣描述代碼 : {weatherCode}</p> */}
              <p>舒適度 : {comfortability}</p>
              <p>最大陣風風速 : {maxWindSpeed} m/s</p>
              <p>最大陣風風向 : {maxWindDirection}°</p>
              <p>能見度 : {visibility} km</p>
              <p>日照時間 : {sunShineTime} hr</p>
              <p>平均風速 : {averageWindSpeed} m/s</p>
              <p>平均風向 : {averageWindDirection}°</p>
              <p>最高溫度 : {maxTemprature} °C</p>
              <p>最低溫度 : {miniTemprature} °C</p>
            </div>
          </div>
          {/* <div className="temp">
            <p className="title">氣溫</p>
            <div className="content">
              <p>{weatherElement.description}</p>
              <p>{weatherElement.observationTime}</p>
              <p>{weatherElement.temperature}</p>
              <p>{weatherElement.windSpeed}</p>
              <p>{weatherElement.humid}</p>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};
export default Weather;

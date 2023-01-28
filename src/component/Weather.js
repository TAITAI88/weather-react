import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Weather = ({ weatherElement, setWeatherElement }) => {
  return (
    <div className="weather">
      <Container className="main">
        <div className="cityName">
          <h2>{weatherElement.locationName}</h2>
        </div>
        <div className="overview">
          <p className="title">天氣概述</p>
          <div className="content">
            <p>{weatherElement.description}</p>
            <p>{weatherElement.observationTime}</p>
            <p>{weatherElement.temperature}</p>
            <p>{weatherElement.windSpeed}</p>
            <p>{weatherElement.humid}</p>
          </div>
        </div>
        <div className="forecast">
          <p className="title">天氣預測</p>
          <div className="content">
            <p>{weatherElement.description}</p>
            <p>{weatherElement.observationTime}</p>
            <p>{weatherElement.temperature}</p>
            <p>{weatherElement.windSpeed}</p>
            <p>{weatherElement.humid}</p>
          </div>
        </div>
        <div className="airquality">
          <p className="title">空氣品質</p>
          <div className="content">
            <p>空氣品質</p>
            <p>空氣品質</p>
            <p>空氣品質</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Weather;

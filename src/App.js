import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}
export default App;

import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes basename={process.env.react - practice}>
        <Route path="/react-practice" element={<HomePage />} />
        <Route path="/react-practice/about" element={<AboutPage />} />
        <Route path="react-practice/result" element={<ResultPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textt from "./components/Textt";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#042743";
      document.title = "Text-Analyzer-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Text-Analyzer-Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          about="Description"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-2">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<Textt mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

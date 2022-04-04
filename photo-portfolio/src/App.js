import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <About />
        <Gallery />
        <Contact />
      </Router>
    </div>
  );
}

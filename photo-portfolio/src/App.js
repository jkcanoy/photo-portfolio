import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}


import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import News from "./Pages/News/News";
import Event from "./Pages/Event/Event";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

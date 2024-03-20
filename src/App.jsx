
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
import Products from "./Pages/Products/Products";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Bag from "./Pages/Bag/Bag";
import Checkout from "./Pages/Checkout/Checkout";
import Membership from "./Pages/Membership/Membership";
import SearchResult from "./Pages/SearchResult/SearchResult";

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
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Bag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/membership/:search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

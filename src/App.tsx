import React from "react";
// import bobut from "./Assets/bobut.png";
import "./App.css";
import Footy from "./components/Footy";
import Heady from "./components/Heady";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Camera from "./pages/Camera";
import Audio from "./pages/Audio";
import Accessoires from "./pages/Accessoires";
import Lumieres from "./pages/Lumieres";
import Home from "./pages/Home";
import Procontact from "./pages/Procontact";
import Panier from "./pages/Panier";
import Paypal from "./pages/Paypal";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Heady />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Camera" element={<Camera />} />
          <Route path="/Audio" element={<Audio />} />
          <Route path="/Lumieres" element={<Lumieres />} />
          <Route path="/Accessoires" element={<Accessoires />} />
          <Route path="/Procontact" element={<Procontact />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Paypal" element={<Paypal />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Inscription" element={<Inscription />} />
        </Routes>
        <Footy />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";


const Home = () => {
    return (
      <div className="">
        <div className="Allinks">
          <NavLink to="/Camera" className="LINK">
            <img className="imgbut" src="./Assets/ursa.png"></img>
            <p>CAMERA</p>
          </NavLink>
          <NavLink to="/Audio" className="LINK">
            <img className="imgbut" src="./Assets/Micrec.png"></img>
            <p>AUDIOS</p>
          </NavLink>
          <NavLink to="/Lumieres" className="LINK">
            <img className="imgbut" src="./Assets/eclairage.png"></img>
            <p>LUMIERES</p>
          </NavLink>
          <NavLink to="/Accessoires" className="LINK">
            <img className="imgbut" src="./Assets/Accessoires.png"></img>
            <p>ACCESSOIRES</p>
          </NavLink>
        </div>
      </div>
    );
};

export default Home;

import BanVidLocGR from "./Assets/BanVidLocGR.png";
import "../App.css";
import "./Heady.css";
import { NavLink } from "react-router-dom";

const Heady = () => {
  return (
    <div className="Heady">
      <div className="divbut">
        <button>Conexion</button>
        <button className="btpanier">
          
          <NavLink to="/Panier">
            <img className="panier" src="./Assets/Panier.png" alt="panier" />
          </NavLink>
        </button>
      </div>
      <img className="Ban" src="./Assets/BanGR.png" alt="Baniere" />;
    </div>
  );
};

export default Heady;

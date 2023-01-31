import BanVidLocGR from "./Assets/BanVidLocGR.png";
import "../App.css";
import "./Heady.css";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";


const Heady = () => {
  return (
    <div className="Heady">
      <div className="divbut">
        <NavLink to="/Connexion">
        <button>Connexion</button>
        </NavLink>

       
        <button className="btpanier">
          
          <NavLink to="/Panier">
            <img className="panier" src="./Assets/Panier.png" alt="panier" />
          </NavLink>
        </button>
      </div>
      <p><img className="Ban" src="./Assets/BanGR.png" alt="Baniere" /></p>;
      <SearchBar/>
    
    </div>
  );
};

export default Heady;

import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Panier.css";

const Panier = () => {
  return (
    <div>
      <NavLink to="/" className="ButNavi">
        <img className="imgbut" src="./Assets/Acc.png" alt="navigation acceuil"></img>
        <p className="vignette">ACCUEIL</p>
      </NavLink>

      <h1>Regler avec PayPal:</h1>
    </div>
  );
};

export default Panier;

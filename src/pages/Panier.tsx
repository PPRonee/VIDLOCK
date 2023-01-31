import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Panier.css";

const Panier = () => {
  return (
    <div>
      <Navbar />
      <div className="panbod">
      <div className="englobeur2">
      <h1>Votre panier:</h1>
      <div className="englobe2">
        <table></table>
        <p>
          <img className="postit" src="./Assets/TotalP.png" alt="panier" />
        </p>
        <div className="butres">
          <NavLink to="/Paypal">
            RESERVATION
            <img className="CB" src="./Assets/cb.png" alt="panier" />
          </NavLink>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Panier;

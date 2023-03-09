import BanVidLocGR from "./Assets/BanVidLocGR.png";
import "../App.css";
import "./Heady.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Heady = () => {
  const token = localStorage.getItem("token");
  console.log("TOKEN",token);
  const navigate = useNavigate();

  const Goto = () => {
    console.log("bouton cliqué");
    if (token === null) {
      alert("Vous devez vous connectez!")
      navigate("/Connexion");
    } else {
      navigate("/Panier");
    }
  };

  return (
    <div className="Heady">
      <div className="divbut">
        <NavLink to="/UpdateClient">
          <img
            className="Iconclient"
            src="./Assets/Iconeclient.png"
            alt="access au compte"
          />
        </NavLink>

        <NavLink to="/Connexion">
          <button>Connexion</button>
        </NavLink>

        <button onClick={Goto} className="btpanier">
          {/* <NavLink to="/Panier"> */}
          <img className="panier" src="./Assets/Panier.png" alt="panier" />
          {/* </NavLink> */}
        </button>
      </div>
      <p>
        <img className="Ban" src="./Assets/BanGR.png" alt="Baniere" />
      </p>
      <SearchBar />
    </div>
  );
};

export default Heady;

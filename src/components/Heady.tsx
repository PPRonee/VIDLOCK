import BanVidLocGR from "./Assets/BanVidLocGR.png";
import "../App.css";
import "./Heady.css";

const Heady = () => {
  return (
    <div className="Heady">
      <div className="divbut">
        <button>Conexion</button>
        <button className="btpanier">
          <img className="panier" src="./Assets/Panier.png" alt="panier" />
        </button>
      </div>
      <img className="Ban" src="./Assets/BanGR.png" alt="Baniere" />;
    </div>
  );
};

export default Heady;

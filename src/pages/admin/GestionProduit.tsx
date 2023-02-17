import { Link } from "react-router-dom";
import "./admin.css";

const GestionProduit = () => {
  return (
    <div>
      <Link to="/AdminPage">
        <h1 className="textShadow">*** ESPACE ADMIN ***</h1>
      </Link>
      <h2 className="bla">*** Gestion des produits ***</h2>
    </div>
  );
};

export default GestionProduit;

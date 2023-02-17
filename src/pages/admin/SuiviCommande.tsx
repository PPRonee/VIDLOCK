import { Link } from "react-router-dom";
import "./admin.css";

const SuiviCommande = () => {
  return (
    <div>
      <Link to="/AdminPage">
        <h1 className="textShadow">*** ESPACE ADMIN ***</h1>
      </Link>
      <h2 className="bla">*** Suivi des commandes ***</h2>
    </div>
  );
};

export default SuiviCommande;

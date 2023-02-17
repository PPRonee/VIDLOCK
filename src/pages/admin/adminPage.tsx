import { Link } from "react-router-dom";
import "./admin.css";

const AdminPage = () => {
  return (
    <div>
      <Link to="/AdminPage">
        <h1 className="textShadow">*** ESPACE ADMIN ***</h1>
      </Link>

      <div className="menu">
        <Link to="/GestionProduit">
          <p className="etiquette">Gestion des produits</p>
        </Link>

        <Link to="/GestionClient">
          <p className="etiquette">Gestion des clients</p>
        </Link>

        <Link to="/Messagerie">
          <p className="etiquette">Messagerie clients</p>
        </Link>

        <Link to="/SuiviCommande">
          <p className="etiquette">Suivi des commandes</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;

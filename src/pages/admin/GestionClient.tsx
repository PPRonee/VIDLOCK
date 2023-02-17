import { Link } from "react-router-dom";
import "./admin.css";

const GestionClient = () => {
  return (
    <div>
      <Link to="/AdminPage">
        <h1 className="textShadow">*** ESPACE ADMIN ***</h1>
      </Link>
      <h2 className="bla">*** Gestion des clients ***</h2>
    </div>
  );
};

export default GestionClient;

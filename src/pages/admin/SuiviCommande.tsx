import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

interface Reservation {
  id: number;
  Nom_client: string;
  Num_reservations: number;
  Date_debut: string;
  Date_fin: string;
  Produit: string;
  Nom_Admin: string;
  Statut_Commande: string;
}



const SuiviCommande = () => {
 useEffect(() => {
   axios.get("http://localhost:8080/api/reservation").then((response) => {
     console.table(response.data);
     SetTabReservation(response.data);
   });
 }, []);

 const [tabReservation, SetTabReservation] = useState<Reservation[]>([]);



  return (
    <div>
      <Link to="/AdminPage">
        <h1 className="textShadow">*** ESPACE ADMIN ***</h1>
      </Link>
      <h2 className="bla">*** Suivi des commandes ***</h2>

      <div className="Tcard2">
        {tabReservation.map((tab, i) => (
          <div className="" key={i}>
            <div className="tableau">
              <div className="colone">
                <p className="TcaseT">ID</p>
                <p className="TcaseT">Nom_client</p>
                <p className="TcaseT">Num_reservations</p>
                <p className="TcaseT">Date_debut</p>
                <p className="TcaseT">Date_fin</p>
                <p className="TcaseT">Nom_Admin</p>
                <p className="TcaseT">Statut</p>
              </div>
              <div className="colone">
                <p className="Tcase">{tab?.id}</p>
                <p className="Tcase">{tab?.Nom_client}</p>
                <p className="Tcase">{tab?.Num_reservations}</p>
                <p className="Tcase">{tab?.Date_debut}</p>
                <p className="Tcase">{tab?.Date_fin}</p>
                <p className="Tcase">{tab?.Nom_Admin}</p>
                <p className="Tcase">{tab?.Statut_Commande}</p>
                <button>
                  <img
                    className="panier"
                    src="./Assets/Delete-Logo.png"
                    alt="panier"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default SuiviCommande;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";


interface Client {
  id: number;
  Nom: string;
  Prenom: string;
  Date_naissance: string;
  Proffession: number;
  Num_Siret: string;
  Adresse: string;
  Email: string;
  Tel: string;
  Password: string;
}





const GestionClient = () => {
  useEffect(() => {
    axios.get("http://localhost:8080/api/client").then((response) => {
      console.table(response.data);
      SetTabClient(response.data);
    });
  }, []);

const [tabClient, SetTabClient] = useState<Client[]>([]);


  return (
    <div>
      <div>
        <Link to="/AdminPage">
          <h1 className="textShadow">*** ESPACE ADMIN ***</h1>
        </Link>
        <h2 className="bla">*** Gestion des clients ***</h2>
      </div>

      <div className="englobeur">
        <div className="colone">
          <p className="TcaseTLit">ID</p>
          <p className="TcaseTLit">Nom</p>
          <p className="TcaseTLit">Prenom</p>
          <p className="TcaseTLit">Date_naissance</p>
          <p className="TcaseTLit">Proffession</p>
          <p className="TcaseTLit">Num_Siret</p>
          <p className="TcaseTLit">Adresse</p>
          <p className="TcaseTLit">Email</p>
          <p className="TcaseTLit">Tel</p>
          <p className="TcaseT">Password</p>
        </div>

        <div className="">
          {tabClient.map((tab, i) => (
            <div className="colone" key={i}>
              <div className="colone">
                <p className="Tcase">{tab?.id}</p>
                <p className="Tcase">{tab?.Nom}</p>
                <p className="Tcase">{tab?.Prenom}</p>
                <p className="Tcase">{tab?.Date_naissance}</p>
                <p className="Tcase">{tab?.Proffession}</p>
                <p className="Tcase">{tab?.Num_Siret}</p>
                <p className="Tcase">{tab?.Adresse}</p>
                <p className="Tcase">{tab?.Email}</p>
                <p className="Tcase">{tab?.Tel}</p>
                <p className="Tcase">{tab?.Password}</p>
                {/* <button onClick={() => handleDelete(tab.id)}>
                  <img
                    className="panier"
                    src="./Assets/Delete-Logo.png"
                    alt="panier"
                  />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GestionClient;

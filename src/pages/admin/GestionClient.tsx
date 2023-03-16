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
    axios
      .get("http://localhost:8080/api/client", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenAdmin")}`,
        },
      })
      .then((response) => {
        console.table(response.data);
        SetTabClient(response.data);
      });
  }, []);

const [tabClient, SetTabClient] = useState<Client[]>([]);


  const handleDelete = (id: number) => {
    if (window.confirm("Supprimer ce client ?")) {
      axios
        .delete(`http://localhost:8080/api/client/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenAdmin")}`,
          },
        })
        .then(() => {
          SetTabClient(tabClient.filter((msg) => msg.id !== id));
          alert("le client a été supprimer");
        })
        .catch((error) => {
          console.log("tu ne peux pas poster", error);
          if (error.response.data.statusCode === 401) {
          }
        });
    }
  };
  
  
  
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
          {/* <p className="TcaseT">Password</p> */}
        </div>

        <div className="">
          {tabClient.map((tab, i) => (
            <div className="colone" key={i}>
              <div className="colone">
                <p className="TcaseLit">{tab?.id}</p>
                <p className="TcaseLit">{tab?.Nom}</p>
                <p className="TcaseLit">{tab?.Prenom}</p>
                <p className="TcaseLit">{tab?.Date_naissance}</p>
                <p className="TcaseLit">{tab?.Proffession}</p>
                <p className="TcaseLit">{tab?.Num_Siret}</p>
                <p className="TcaseLit">{tab?.Adresse}</p>
                <p className="TcaseLit">{tab?.Email}</p>
                <p className="TcaseLit">{tab?.Tel}</p>
                {/* <p className="Tcase">{tab?.Password}</p> */}
                <button onClick={() => handleDelete(tab.id)}>
                  <img
                    className="panier"
                    src="./Assets/Delete-Logo.png"
                    alt="panier"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GestionClient;

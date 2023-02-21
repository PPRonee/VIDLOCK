import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

interface Message {
  id: number;
  Nom: string;
  Email: string;
  Message: string;
  observation: string;
}

const Messagerie = () => {
  useEffect(() => {
    axios.get("http://localhost:8080/api/message").then((response) => {
      console.table(response.data);
      SetTabMessage(response.data);
    });
  }, []);

  const [tabMessage, SetTabMessage] = useState<Message[]>([]);

  return (
    <div>
      <Link to="/AdminPage">
        <h1 className="textShadow">*** ESPACE ADMIN ***</h1>
      </Link>
      <h2 className="bla">*** Messagerie ***</h2>

      <div className="Tcard2">
        {tabMessage.map((tab, i) => (
          <div className="" key={i}>
            <div className="tableau">
              <div className="colone">
                <p className="TcaseT">ID</p>
                <p className="TcaseT">Nom</p>
                <p className="TcaseT">Email</p>
                <p className="TcaseT"> Message</p>
                <p className="TcaseT">observation</p>
              </div>
              <div className="colone">
                <p className="Tcase">{tab?.id}</p>
                <p className="Tcase">{tab?.Nom}</p>
                <p className="Tcase">{tab?.Email}</p>
                <p className="Tcase">{tab?.Message}</p>
                <p className="Tcase">{tab?.observation}</p>
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

export default Messagerie;

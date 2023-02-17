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
        {tabMessage.map((tab) => (
          <div className="cardT2">
            <div className="carteR">
              <p className="case2">{tab?.id}</p>
              <p className="case">{tab?.Nom}</p>
              <p className="case">{tab?.Email}</p>
            </div>
            <div className="messageR">
              <p className="nomen">{tab?.Message}</p>
            </div>
            <p className="Reponse">{tab?.observation}</p>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Messagerie;

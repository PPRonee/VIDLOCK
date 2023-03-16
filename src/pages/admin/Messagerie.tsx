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
    axios
      .get("http://localhost:8080/api/message", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenAdmin")}`,
        },
      })
      .then((response) => {
        console.table(response.data);
        SetTabMessage(response.data);
      });
  }, []);

  const [tabMessage, SetTabMessage] = useState<Message[]>([]);

  const handleDelete = (id: number) => {
    if (window.confirm("Supprimer ce message ?")) {
      axios
        .delete(`http://localhost:8080/api/message/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenAdmin")}`,
          },
        })
        .then(() => {
          SetTabMessage(tabMessage.filter((msg) => msg.id !== id));
          alert("le message a été supprimer");
        })
        .catch((error) => {
          console.log("tu ne peux pas poster", error);
          if (error.response.data.statusCode === 401) {
          }
        });
    }
  };

  const handlePatch = (id: number, newValue: string) => {
    axios
      .patch(
        `http://localhost:8080/api/message/${id}`,
        {
          observation: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenAdmin")}`,
          },
        }
      )
      .then(() => {
        SetTabMessage(
          tabMessage.map((msg) => {
            if (msg.id === id) {
              return { ...msg, observation: newValue };
            } else {
              return msg;
            }
          })
        );
        // setTimeout(() => {
        //   alert("Observation mise à jour");
        // }, 1000); // 1000ms = 1s
      })
      .catch((error) => {
        console.log("Erreur lors de la mise à jour", error);
        if (error.response?.status === 401) {
          // gestion de l'erreur
        }
      });
  };

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

                <input
                  value={tab?.observation}
                  onChange={(e) => handlePatch(tab.id, e.target.value)}
                  className="TcaseObs"
                />

                <button onClick={() => handleDelete(tab.id)}>
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
      </div>
    </div>
  );
};

export default Messagerie;

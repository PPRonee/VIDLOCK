import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

interface Reservation {
  id: number;
  Date_Resa: string;
  Nom_client: string;
  Num_reservations: number;
  Date_debut: string;
  Date_fin: string;
  Produit: string;
  Nom_Admin: string;
  Statut_Commande: string;
  Prix_Total: number;
}

const SuiviCommande = () => {
  useEffect(() => {
    axios.get("http://localhost:8080/api/reservation").then((response) => {
      console.table(response.data);
      SetTabReservation(response.data);
    });
  }, []);

  const [tabReservation, SetTabReservation] = useState<Reservation[]>([]);

  const handleDelete = (id: number) => {
    if (window.confirm("Supprimer ce reservation ?")) {
      axios
        .delete(`http://localhost:8080/api/reservation/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        })
        .then(() => {
          SetTabReservation(tabReservation.filter((msg) => msg.id !== id));
          alert("le reservation a été supprimer");
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
        `http://localhost:8080/api/reservation/${id}`,
        {
          Date_debut: newValue,
          // Date_fint: newValue,
          // Produit: newValue,
          // Nom_Admin: newValue,
          // Statut_Commande: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      )
      .then(() => {
        SetTabReservation(
          tabReservation.map((msg) => {
            if (msg.id === id) {
              return {
                ...msg,
                Date_debut: newValue,
                // Date_fint: newValue,
                // Produit: newValue,
                // Nom_Admin: newValue,
                // Statut_Commande: newValue,
              };
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

  const handlePatch2 = (id: number, newValue: string) => {
    axios
      .patch(
        `http://localhost:8080/api/reservation/${id}`,
        {
          //  Date_debut: newValue,
          Date_fin: newValue,
          // Produit: newValue,
          // Nom_Admin: newValue,
          // Statut_Commande: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      )
      .then(() => {
        SetTabReservation(
          tabReservation.map((msg) => {
            if (msg.id === id) {
              return {
                ...msg,
                //  Date_debut: newValue,
                Date_fin: newValue,
                // Produit: newValue,
                // Nom_Admin: newValue,
                // Statut_Commande: newValue,
              };
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

  const handlePatch3 = (id: number, newValue: string) => {
    axios
      .patch(
        `http://localhost:8080/api/reservation/${id}`,
        {
          //  Date_debut: newValue,
          // Date_fin: newValue,
          Produit: newValue,
          // Nom_Admin: newValue,
          // Statut_Commande: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      )
      .then(() => {
        SetTabReservation(
          tabReservation.map((msg) => {
            if (msg.id === id) {
              return {
                ...msg,
                //  Date_debut: newValue,
                // Date_fin: newValue,
                Produit: newValue,
                // Nom_Admin: newValue,
                // Statut_Commande: newValue,
              };
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

  const handlePatch4 = (id: number, newValue: string) => {
    axios
      .patch(
        `http://localhost:8080/api/reservation/${id}`,
        {
          //  Date_debut: newValue,
          // Date_fin: newValue,
          // Produit: newValue,
          Nom_Admin: newValue,
          // Statut_Commande: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      )
      .then(() => {
        SetTabReservation(
          tabReservation.map((msg) => {
            if (msg.id === id) {
              return {
                ...msg,
                //  Date_debut: newValue,
                // Date_fin: newValue,
                // Produit: newValue,
                Nom_Admin: newValue,
                // Statut_Commande: newValue,
              };
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

  const handlePatch5 = (id: number, newValue: string) => {
    axios
      .patch(
        `http://localhost:8080/api/reservation/${id}`,
        {
          Statut_Commande: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      )
      .then(() => {
        SetTabReservation(
          tabReservation.map((msg) => {
            if (msg.id === id) {
              return {
                ...msg,
                Statut_Commande: newValue,
              };
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
      <h2 className="bla">*** Suivi des commandes ***</h2>

      <div className="Tcard2">
        {tabReservation.map((tab, i) => (
          <div className="" key={i}>
            <div className="tableau">
              <div className="colone">
                <p className="TcaseT">ID</p>
                <p className="TcaseT">Date_Resa</p>
                <p className="TcaseT">Nom_client</p>
                <p className="TcaseT">Date_debut</p>
                <p className="TcaseT">Date_fin</p>
                <p className="TcaseT">Prix_Total</p>
                <p className="TcaseT">Produit</p>
                <p className="TcaseT">Nom_Admin</p>
                <p className="TcaseT">Statut</p>
              </div>
              <div className="colone">
                <p className="Tcase">{tab?.id}</p>
                <p className="Tcase">{tab?.Date_Resa}</p>
                <p className="Tcase">{tab?.Nom_client}</p>

                <input
                  value={tab?.Date_debut}
                  onChange={(e) => handlePatch(tab.id, e.target.value)}
                  className="TcaseObs"
                />

                <input
                  value={tab?.Date_fin}
                  onChange={(e) => handlePatch2(tab.id, e.target.value)}
                  className="TcaseObs"
                />

                <p className="Tcase">{tab?.Prix_Total}</p>
                <input
                  value={tab?.Produit}
                  onChange={(e) => handlePatch3(tab.id, e.target.value)}
                  className="TcaseObs"
                />

                <input
                  value={tab?.Nom_Admin}
                  onChange={(e) => handlePatch4(tab.id, e.target.value)}
                  className="TcaseObs"
                />

                <input
                  value={tab?.Statut_Commande}
                  onChange={(e) => handlePatch5(tab.id, e.target.value)}
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
        ;
      </div>
    </div>
  );
};

export default SuiviCommande;

import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./admin.css";

interface Produit {
  id: number;
  refproduit: string;
  marque: string;
  categorie: string;
  stock_initial: number;
  stock_disponible: number;
  prix_unit: number;
  lien_image: string;
  lien_video: string;
  // tags: string[];
  descriptif: string;
  Type:string
}

const GestionProduit = () => {
  useEffect(() => {
    axios.get("http://localhost:8080/api/produits").then((response) => {
      console.table(response.data);
      SetTabProduit(response.data);
    });
  }, []);

  const [tabProduit, SetTabProduit] = useState<Produit[]>([]);

  const handleDelete = (id: number) => {
    if (window.confirm("Supprimer ce Produit ?")) {
      axios
        .delete(`http://localhost:8080/api/Produits/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenAdmin")}`,
          },
        })
        .then(() => {
          SetTabProduit(tabProduit.filter((msg) => msg.id !== id));
          alert("le Produit a été supprimer");
        })
        .catch((error) => {
          console.log("tu ne peux pas poster", error);
          if (error.response.data.statusCode === 401) {
          }
        });
    }
  };

  const handlePatch = (id: number, newValue: number) => {
    console.log("coucou", id);
    console.log("coucou 2", tabProduit);

    axios
      .patch(
        `http://localhost:8080/api/produits/${id}`,
        {
          stock_initial: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenAdmin")}`,
          },
        }
      )
      .then(() => {
        SetTabProduit(
          tabProduit.map((msg) => {
            if (msg.id === id) {
              return {
                ...msg,
                stock_initial: newValue,
              };
            } else {
              return msg;
            }
          })
        );
      })
      .catch((error) => {
        console.log("Erreur lors de la mise à jour", error);
        if (error.response?.status === 401) {
          // gestion de l'erreur
        }
      });
  };

  const handlePatch2 = (id: number, newValue: number) => {
    axios
      .patch(
        `http://localhost:8080/api/produits/${id}`,
        {
          stock_disponible: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenAdmin")}`,
          },
        }
      )
      .then(() => {
        SetTabProduit(
          tabProduit.map((msg) => {
            if (msg.id === id) {
              return {
                ...msg,
                stock_disponible: newValue,
              };
            } else {
              return msg;
            }
          })
        );
      })
      .catch((error) => {
        console.log("Erreur lors de la mise à jour", error);
        if (error.response?.status === 401) {
          // gestion de l'erreur
        }
      });
  };

  const handlePatch3 = (id: number, newValue: number) => {
    axios
      .patch(
        `http://localhost:8080/api/produits/${id}`,
        {
          prix_unit: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenAdmin")}`,
          },
        }
      )
      .then(() => {
        SetTabProduit(
          tabProduit.map((msg) => {
            if (msg.id === id) {
              return {
                ...msg,
                prix_unit: newValue,
              };
            } else {
              return msg;
            }
          })
        );
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
      <div>
        <Link to="/AdminPage">
          <h1 className="textShadow">*** ESPACE ADMIN ***</h1>
        </Link>
        <h2 className="bla">*** Gestion des produits ***</h2>
      </div>

      <NavLink to="/CreationProduit">
        <button>Crée un nouveau produit</button>
      </NavLink>

      <h2>Tableau des produit</h2>

      <div className="englobeur">
        <div className="overflow">
          <div className="englobeur">
            <div className="colone">
              <p className="TcaseT">Produit</p>
              <p className="TcaseTLit">ID</p>
              <p className="TcaseTLit">refproduit</p>
              <p className="TcaseTLit">marque</p>
              <p className="TcaseTLit">categorie</p>
              <p className="TcaseTLit">stock_initial</p>
              <p className="TcaseTLit">stock_disponible</p>
              <p className="TcaseTLit">prix_unit</p>
              <p className="TcaseT">lien_image</p>
              <p className="TcaseT">lien_video</p>
              <p className="TcaseTLit">Type</p>
              <p className="TcaseT">descriptif</p>
            </div>

            <div className="">
              {tabProduit.map((tab, i) => (
                <div className="colone" key={i}>
                  <p className="Tcase">
                    <img
                      className="Phototaille"
                      src={tab?.lien_image}
                      alt="produit"
                    ></img>
                  </p>
                  <p className="TcaseLit">{tab?.id}</p>
                  <p className="TcaseLit">{tab?.refproduit}</p>
                  <p className="TcaseLit">{tab?.marque}</p>
                  <p className="TcaseLit">{tab?.categorie}</p>
                  <input
                    type="number"
                    value={tab?.stock_initial}
                    onChange={(e) =>
                      handlePatch(tab.id, parseInt(e.target.value))
                    }
                    className="TcaseObsLit"
                  />

                  {/* Ici on utilise la methode parseInt pour convertir les string en chiffre */}

                  <input
                    type="number"
                    value={tab?.stock_disponible}
                    onChange={(e) =>
                      handlePatch2(tab.id, parseInt(e.target.value))
                    }
                    className="TcaseObsLit"
                  />
                  <input
                    type="number"
                    value={tab?.prix_unit}
                    onChange={(e) =>
                      handlePatch3(tab.id, parseInt(e.target.value))
                    }
                    className="TcaseObsLit"
                  />
                  <p className="Tcase">{tab?.lien_image}</p>
                  <p className="Tcase">{tab?.lien_video}</p>
                  <p className="TcaseLit">{tab?.Type}</p>
                  <p className="Tcase">{tab?.descriptif}</p>
                  <button onClick={() => handleDelete(tab.id)}>
                    <img
                      className="panier"
                      src="./Assets/Delete-Logo.png"
                      alt="panier"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionProduit;

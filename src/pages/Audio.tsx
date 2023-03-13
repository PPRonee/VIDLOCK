import React from "react";
import Navbar from "../components/Navbar";
import "./ProduitCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

interface Produits {
  id: number;
  refproduit: string;
  marque: string;
  categorie: string;
  descriptif: string;
  stock_initial: number;
  stock_disponible: number;
  prix_unit: number;
  lien_image: string;
  lien_video: string;
  tags: string[];
}

function Audio() {
  useEffect(() => {
    axios.get("http://localhost:8080/api/produits").then((response) => {
      console.table(response.data);
      setTabProduits(response.data);
    });
  }, []);

  const [tabProduits, setTabProduits] = useState<Produits[]>([]);
  const [selectedProduit, setSelectedProduit] = useState<Produits | null>(null);

  return (
    <div>
      <div className="Navi">
        <Navbar />
      </div>

      <div className="center">
        <div className="Tcard">
          {tabProduits
            .filter((produit) => produit.categorie === "Audio")
            .map((tab, i) => (
              <div className="cardT" key={i}>
                <div className="photETpro">
                  <p className="engloPPhototaille">
                    <img
                      className="Phototaille"
                      src={tab?.lien_image}
                      alt="produit"
                    ></img>
                  </p>
                  <p className="nomen">{tab?.refproduit}</p>
                </div>
                <p>{tab?.categorie}</p>

                <div className="priETpanier">
                  <NavLink
                    to={{
                      pathname: "/ProduitDetail/" + tab.id,
                    }}
                  >
                    <button
                      value={tab?.id}
                      className="butProduit"
                      onClick={() => setSelectedProduit(tab)}
                    >
                      voir produit
                    </button>
                  </NavLink>
                  <p className="prix">{tab?.prix_unit}€/jour</p>
                  <button>
                    <img
                      className="panier"
                      src="./Assets/Panier.png"
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
}

export default Audio;

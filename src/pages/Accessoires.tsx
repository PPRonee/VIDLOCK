import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./ProduitCard.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

interface Produit {
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
  Type: string;
  quantitée: number;
}

function saveProduits(produits: Produit[]) {
  localStorage.setItem("produits", JSON.stringify(produits));
}

function getProduits(): Produit[] {
  const produits = localStorage.getItem("produits");
  if (produits) {
    return JSON.parse(produits);
  } else {
    return [];
  }
}

function Accessoire() {
  const [tabProduits, setTabProduits] = useState<Produit[]>([]);
  useEffect(() => {
    axios
      .get<Produit[]>("http://localhost:8080/api/produits")
      .then((response) => {
        console.table(response.data);
        setTabProduits(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [selectedProduit, setSelectedProduit] = useState<Produit | null>(null);

  const HandleAddProduit = (produit: Produit) => {
    const produits = getProduits();
    let foundProduct = produits.find((p) => p.id === produit.id);
    if (foundProduct !== undefined) {
      foundProduct.quantitée++;
    } else {
      produit.quantitée = 1;
      produits.push(produit);
    }

    saveProduits(produits);
    alert("vous avez ajouté le produit dans votre panier");
    console.table(produits);
  };

  return (
    <div>
      <div className="Navi">
        <Navbar />
      </div>

      <div className="center">
        <div className="Tcard">
          {tabProduits
            .filter((produit) => produit.categorie === "accessoire")
            .map((tab, i) => (
              <div className="cardT" key={i}>
                <div className="photETpro">
                  <p className="engloPPhototaille">
                    <img
                      className="Phototaille"
                      src={tab?.lien_image}
                      alt="produit"
                    />
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
                  {tabProduits.length > 0 && (
                    <button onClick={() => HandleAddProduit(tab)}>
                      <img
                        className="panier"
                        src="../Assets/Panier.png"
                        alt="panier"
                      />
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Accessoire;

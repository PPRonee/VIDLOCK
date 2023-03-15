import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import "./ProduitCard.css";

interface Produit {
  quantité: any;
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

function ProduitDetail() {
  let { idProduct } = useParams<{ idProduct: string }>();

  const [tabProduits, setTabProduits] = useState<Produit>();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/produits/${idProduct}`)
      .then((response) => {
        console.log(response.data);
        setTabProduits(response.data);
      });
  }, [idProduct]);

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
    alert("vous avez ajouter le produit dans votre panier");
    console.table(produits);
  };

  return (
    <div>
      <div className="Navi">
        <Navbar />
      </div>

      <h1>produit</h1>

      <div className="Tcard2">
        <div className="cardT2">
          <div className="photETpro">
            <p className="engloPPhototaille">
              <img
                className="Phototaille"
                src={tabProduits?.lien_image}
                alt="produit"
              ></img>
            </p>
            <p className="nomen">{tabProduits?.refproduit}</p>
          </div>
          <p>{tabProduits?.categorie}</p>
          <p>{tabProduits?.descriptif}</p>

          <iframe
            width="560"
            height="315"
            src={tabProduits?.lien_video}
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>

          <div className="priETpanier">
            <p className="prix">{tabProduits?.prix_unit}€/jour</p>
            {tabProduits && (
              <button onClick={() => HandleAddProduit(tabProduits)}>
                <img
                  className="panier"
                  src="../Assets/Panier.png"
                  alt="panier"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProduitDetail;

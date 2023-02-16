import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import "./ProduitCard.css";

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
  tags: string[];
}

function ProduitDetail() {
  // 1 récupérer dans l'url l'id du produit (idProduct)
// const idProduct = {id}
  // -> useParam() reactroutedom
  let { idProduct } = useParams();
  // 2 fasse ton appel API pour récupérer 1 produit par son id 
  useEffect(() => {
    axios.get(`http://localhost:8080/api/produits/${idProduct}`).then((response) => {
      console.log(response.data);
      setTabProduits(response.data);
    });
  }, []);

  const [tabProduits, setTabProduits] = useState<Produit>();
  

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
            <button>
              <img className="panier" src="../Assets/Panier.png" alt="panier" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProduitDetail;
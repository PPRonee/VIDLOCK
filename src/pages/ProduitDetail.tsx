import React from "react";

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

const ProduitDetail = ( props:any ) => {
  return (
    <div className="Tcard">
      <h1>Produit:</h1>
      {/* {props.id} */}
      {/* <h2>{produit.refproduit}</h2>
      <p>Marque: {produit.marque}</p>
      <p>Catégorie: {produit.categorie}</p>
      <p>Descriptif: {produit.descriptif}</p>
      <p>Stock initial: {produit.stock_initial}</p>
      <p>Stock disponible: {produit.stock_disponible}</p>
      <p>Prix unitaire: {produit.prix_unit}€</p>
      <img src={produit.lien_image} alt="product" /> */}
    </div>
  );
};

export default ProduitDetail;

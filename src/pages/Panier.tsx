import { FormEvent, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Panier.css";

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

const Panier = () => {
  const [tabProduits, setTabProduits] = useState<Produit[]>([]);

  const Date_depart = useRef<HTMLInputElement>(null);
  const Date_retour = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const produits = getProduits();
    setTabProduits(produits);
  }, []);

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log("button form clicked");
    console.log(Date_depart.current?.value);
    console.log(Date_retour.current?.value);

    let Reservation = {
      Date_depart: Date_depart.current?.value,
      Date_retour: Date_retour.current?.value,
    };

    console.table(Reservation);
  };

  return (
    <div>
      <Navbar />
      <div className="panbod">
        <div className="englobeur2">
          <p> Veuillez entrer les date de réservation souhaiter</p>

          <form className="englobeur" onSubmit={handleSubmitForm}>
            <div className="englobeur">
              <label htmlFor="nameUser">Date de depart</label>
              <input
                type="date"
                className="form-control"
                id="nameUser"
                placeholder="Date de depart"
                ref={Date_depart}
                required
              />
            </div>

            <div className="englobeur">
              <label htmlFor="nameUser">Date de retour</label>
              <input
                type="date"
                className="form-control"
                id="nameUser"
                placeholder="Date de depart"
                ref={Date_retour}
                required
              />
            </div>
          </form>

          <h1>Votre panier:</h1>
          <div className="englobe2">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Référence produit</th>
                    <th>Prix unitaire</th>
                    <th>quantité</th>
                  </tr>
                </thead>
                <tbody>
                  {tabProduits.map((produit, index) => (
                    <tr key={index}>
                      <td>{produit.refproduit}</td>
                      <td>{produit.prix_unit}</td>
                      <td>{produit.prix_unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              <img className="postit" src="./Assets/TotalP.png" alt="panier" />
            </p>
            <div className="butres">
              <NavLink to="/Paypal">
                RESERVATION
                <img className="CB" src="./Assets/cb.png" alt="panier" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;

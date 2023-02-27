import { clear } from "@testing-library/user-event/dist/clear";
import { FormEvent, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Panier.css";

interface Produit {
  // filter(arg0: (p: any) => boolean): Produit;
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
  quantitée: number;
}

const Panier = () => {
  const [tabProduits, setTabProduits] = useState<Produit[]>([]);
  const [totalPanier, setTotalPanier] = useState<number>(0);
  // const [getProduits, setgetProduits] = useState<Produit[]>([]);

  const Date_depart = useRef<HTMLInputElement>(null);
  const Date_retour = useRef<HTMLInputElement>(null);

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

  const HandleAddProduit = (produit: Produit) => {
    let produits = getProduits();
    let foundProduct = produits.find((p) => p.id === produit.id);
    if (foundProduct !== undefined) {
      foundProduct.quantitée++;
    } else {
      produit.quantitée = 1;
      produits.push(produit);
    }

    saveProduits(produits);
    // alert("vous avez ajouter le produit dans votre panier");
    console.table(produits);
    //  refreshPanier();
    // getProduits();
    setTabProduits(produits);
  };

  const HandleRemoveProduit = (produit: Produit) => {
    let produits = getProduits();
    const index = produits.findIndex((p) => p.id === produit.id);

    if (index !== -1) {
      produits[index].quantitée--;
      if (produits[index].quantitée === 0) {
        produits.splice(index, 1);
      }
    }

    saveProduits(produits);
    // alert("vous avez enlevé le produit dans votre panier");
    console.table(produits);
    setTabProduits(produits);
  };

  function getTotalPrice(): number {
    let produits = getProduits();
    let total = 0;
    for (let produit of produits) {
      total += produit.quantitée * produit.prix_unit;
    }
    return total;
  }

  const handleDelete = (produit: Produit) => {
    let produits = getProduits();
    produits = produits.filter((p) => p.id !== produit.id);

    saveProduits(produits);

    alert("Vous avez enlevé la reference de votre panier");
    setTabProduits(produits);
    console.table(produits);
  };

 
  useEffect(() => {
    const produits = getProduits();
    setTabProduits(produits);
  }, []);

  useEffect(() => {
    const total = getTotalPrice();
    setTotalPanier(total);
  }, [tabProduits]);

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
          <p> Veuillez entrer les dates de réservation souhaiter</p>

          <form className="englobeur" onChange={handleSubmitForm}>
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
          <div className="panierOnly">
            <div className="">
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Produit</th>
                      <th>Référence produit</th>
                      <th>Prix unitaire</th>
                      <th>Quantité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabProduits.map((produit, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            className="Phototaille"
                            src={produit?.lien_image}
                            alt="produit"
                          ></img>
                        </td>
                        <td>{produit.refproduit}</td>
                        <td>{produit.prix_unit}</td>
                        <td className="quanto">
                          {produit.quantitée}
                          <div className="butx3">
                            {tabProduits && (
                              <button
                                className="quantitée"
                                onClick={() => HandleAddProduit(produit)}
                              >
                                +
                              </button>
                            )}

                            {tabProduits && (
                              <button
                                className="quantitée"
                                onClick={() => HandleRemoveProduit(produit)}
                              >
                                -
                              </button>
                            )}

                            <button
                              className="quantitée"
                              onClick={() => handleDelete(produit)}
                            >
                              <img
                                className="panier"
                                src="./Assets/Delete-Logo.png"
                                alt="panier"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="coteAcote">
              <div>
                <div className="leTotal">{totalPanier} €</div>
                <p>
                  <img
                    className="postit"
                    src="./Assets/TotalP.png"
                    alt="panier"
                  />
                </p>
              </div>
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
    </div>
  );
};

export default Panier;

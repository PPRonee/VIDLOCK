import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Searchbar.css";
import { NavLink } from "react-router-dom";

interface Produit {
  id: number;
  refproduit: string;
  marque: string;
  categorie: string;
  Type: string;
  stock_initial: number;
  stock_disponible: number;
  prix_unit: number;
  lien_image: string;
  lien_video: string;
  descriptif: string;
  tags: string[];
}

const SearchBar = () => {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [filteredProduits, setFilteredProduits] = useState<Produit[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get<Produit[]>("http://localhost:8080/api/produits")
      .then((response) => {
        setProduits(response.data);
        setFilteredProduits(response.data);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProduits(produits);
    } else {
      setFilteredProduits(
        produits.filter((produit) =>
          produit.Type.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, produits]);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label  htmlFor="recherche">
       
        <input
          className="search-bar"
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <p className="rech"> Rechercher un produit:</p>
      </label>

      <div className="englobeur">
        {searchTerm !== "" &&
          filteredProduits.map((tab) => (
            <div key={tab.id}>
              <div className="ticketSearchBar">
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
                {/* <p>{tab?.categorie}</p> */}

                <div className="priETpanier">
                  <NavLink
                    to={{
                      pathname: "/ProduitDetail/" + tab.id,
                    }}
                  >
                    <button
                      value={tab?.id}
                      className="butProduit"
                      // onClick={() => setSelectedProduit(tab)}
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;

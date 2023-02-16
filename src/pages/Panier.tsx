import { FormEvent, useRef } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Panier.css";




const Panier = () => {

  const Date_depart = useRef<HTMLInputElement>(null);
  const Date_retour = useRef<HTMLInputElement>(null);

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log("button form clicked");
    // console.log(NomElement.current?.value);
    console.log(Date_depart.current?.value);
    console.log(Date_retour.current?.value);


    let Reservation = {
      Date_depart: Date_depart.current?.value,
      Date_retour: Date_retour.current?.value,
    }

    console.table(Reservation);
 };

    return (
      <div>
        <Navbar />
        <div className="panbod">
          <div className="englobeur2">
            {/* <p> `{Prenom},{Nom}` </p> */}
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
              {/* <button className="butcon" type="submit">
                Envoyer
              </button> */}
            </form>

            <h1>Votre panier:</h1>
            <div className="englobe2">
              <table></table>
              <p>
                <img
                  className="postit"
                  src="./Assets/TotalP.png"
                  alt="panier"
                />
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

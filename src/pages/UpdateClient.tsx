import axios from "axios";
import React, { FormEvent, useRef } from "react";
import Navbar from "../components/Navbar";

const UpdateClient = () => {
  const NomElement = useRef<HTMLInputElement>(null);
  const PrenomElement = useRef<HTMLInputElement>(null);
  const Date_naissance = useRef<HTMLInputElement>(null);
  const ProffessionElement = useRef<HTMLInputElement>(null);
  const Num_SiretElement = useRef<HTMLInputElement>(null);
  const AdresseElement = useRef<HTMLInputElement>(null);
  const EmailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const confirmPasswordElement = useRef<HTMLInputElement>(null);

  

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log("button form clicked");
    console.log(NomElement.current?.value);
    console.log(PrenomElement.current?.value);
    console.log(Date_naissance.current?.value);
    console.log(ProffessionElement.current?.value);
    console.log(Num_SiretElement.current?.value);
    console.log(AdresseElement.current?.value);
    console.log(EmailElement.current?.value);
    console.log(passwordElement.current?.value);
    console.log(confirmPasswordElement.current?.value);

if (
      passwordElement.current?.value !== confirmPasswordElement.current?.value
    ) {
      alert("Les mots de passe ne correspondent pas.");
    } else {
      const passWordVerif = passwordElement.current?.value;

      let Client = {
        Nom: NomElement.current?.value,
        Prenom: PrenomElement.current?.value,
        Date_naissance: Date_naissance.current?.value,
        Proffession: ProffessionElement.current?.value,
        Num_Siret: Num_SiretElement.current?.value,
        Adresse: AdresseElement.current?.value,
        Email: EmailElement.current?.value,
        Password: passWordVerif,
      };

console.table(Client)

      axios
        .post("http://localhost:8080/api/client/id", Client)
        .then((response) => {
          console.log("********** reception ***********");
          console.log("response.data: ", response.data);
          // localStorage.setItem("token", response.data.token);
          // très important à ne plus jamais supprimer
          alert("Les modification ont été prise en compte");
        })
        .catch((err) => {
          alert("Email ou mot de passe incorect");
        });
    }
  };




  return (
    <div>
      <Navbar />
      <div>
        <h1>Votre compte</h1>
      </div>
      <div>
        <h2>Infos du compte:</h2>
        <p>infos.......</p>
      </div>
      <div>
        <h2>Modifier compte:</h2>
      </div>

      <div className="englobeur">
        <div className="Connect">
          <h1 className="hi">Modifier compte:</h1>
          {/*<form onSubmit={(e) =>{handleSubmitForm(e)}}>*/}
          <form className="englobeur" onSubmit={handleSubmitForm}>
            
            <div className="englobeur">
              <label htmlFor="nameUser">Proffession</label>
              <input
                type="name"
                className="form-control"
                id="nameUser"
                placeholder="Proffession"
                ref={ProffessionElement}
              />
            </div>

            <div className="englobeur">
              <label htmlFor="nameUser">Siret (facultatif)</label>
              <input
                type="name"
                className="form-control"
                id="nameUser"
                placeholder="Numero Siret"
                ref={Num_SiretElement}
              />
            </div>

            <div className="englobeur">
              <label htmlFor="nameUser">Adresse</label>
              <input
                type="adress"
                className="form-control"
                id="nameUser"
                placeholder="Adresse"
                ref={AdresseElement}
                required
              />
            </div>

            <div className="englobeur">
              <label htmlFor="emailUser">Email</label>
              <input
                type="email"
                className="form-control"
                id="emailUser"
                placeholder="nom@mailexemple.com"
                ref={EmailElement}
                required
              />
            </div>

            <div className="englobeur">
              <label htmlFor="passwordUser">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="passwordUser"
                placeholder="Password"
                ref={passwordElement}
                required
              />
            </div>

            <div className="englobeur">
              <label htmlFor="passwordUser">Confirmez mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="passwordUser"
                placeholder="Password"
                ref={confirmPasswordElement}
                required
              />
            </div>

            <button className="butcon" type="submit">
              Modifier 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateClient;

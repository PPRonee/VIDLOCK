import { FormEvent, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "./Connexion.css";

const Inscription = () => {
  const nameElement = useRef<HTMLInputElement>(null);
  const firstnameElement = useRef<HTMLInputElement>(null);
  const bDateElement = useRef<HTMLInputElement>(null);
  const profElement = useRef<HTMLInputElement>(null);
  const siretElement = useRef<HTMLInputElement>(null);
  const adresseElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const confirmPasswordElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log("button form clicked");
    console.log(nameElement.current?.value);
    console.log(firstnameElement.current?.value);
    console.log(bDateElement.current?.value);
    console.log(siretElement.current?.value);
    console.log(adresseElement.current?.value);
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);

    console.log("password object 1 : ", passwordElement);
    console.log("password object 2 : ", confirmPasswordElement);

    if (
      passwordElement.current?.value !== confirmPasswordElement.current?.value
    ) {
      alert("Les mots de passe ne correspondent pas.");
    } else {
      const passWordVerif = passwordElement.current?.value;

      let User = {
        name: nameElement.current?.value,
        firstName: firstnameElement.current?.value,
        bDate: bDateElement.current?.value,
        proffession: profElement.current?.value,
        siret: siretElement.current?.value,
        adresse: adresseElement.current?.value,
        email: emailElement.current?.value,
        password: passWordVerif,
      };

      axios
        .post("http://localhost:8080/api/user/connexion", User)
        .then((response) => {
          console.log("********************************");
          console.log("response.data: ", response.data);
          localStorage.setItem("token", response.data.token); // très important à ne plus jamais supprimer
          navigate("/Home");
        })
        .catch((err) => {
          alert("Email ou mot de passe incorect");
        });
    }
  };

  return (
    <div className="englobeur">
      <div className="Connect">
        <h1 className="hi">Inscription</h1>
        {/*<form onSubmit={(e) =>{handleSubmitForm(e)}}>*/}
        <form className="englobeur" onSubmit={handleSubmitForm}>
          <div className="englobeur">
            <label htmlFor="nameUser">Nom</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="nom"
              ref={nameElement}
              required
              // required rend le champ obligatoire
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">Prenom</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="Prenom"
              ref={firstnameElement}
              required
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">Date de Naissance</label>
            <input
              type="date"
              className="form-control"
              id="nameUser"
              placeholder="Date de naissance"
              ref={bDateElement}
              required
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">Proffession</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="Proffession"
              ref={profElement}
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">Siret (facultatif)</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="Numero Siret"
              ref={siretElement}
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">Adresse</label>
            <input
              type="adress"
              className="form-control"
              id="nameUser"
              placeholder="Adresse"
              ref={adresseElement}
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
              ref={emailElement}
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
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inscription;

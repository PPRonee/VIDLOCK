import { FormEvent, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Connexion.css";

const Connect = () => {
  const nameElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log("button form clicked");
    console.log(nameElement.current?.value);
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);

    let User = {
      name: nameElement.current?.value,
      email: emailElement.current?.value,
      password: passwordElement.current?.value,
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
  };

  return (
    <div className="englobeur">
      <div className="Connect">
        <h1 className="hi">Connexion</h1>
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
            />

            <button className="butcon" type="submit">
              Se connecter
            </button>
          </div>
        </form>

        <div className="blockbleuclaie">
          <h2>Vous n'avez pas encore de compte chez nous?</h2>
          <NavLink to="/Inscription" className="nav-link">
            <p className="phover">Crée un compte ici</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Connect;

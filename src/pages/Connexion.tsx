import { FormEvent, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Connexion.css";



const Connect = () => {
  const NomElement = useRef<HTMLInputElement>(null);
  const EmailElement = useRef<HTMLInputElement>(null);
  const PasswordElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();




  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log("button form clicked");
    console.log(NomElement.current?.value);
    console.log(EmailElement.current?.value);
    console.log(PasswordElement.current?.value);

    let Client = {
      Nom: NomElement.current?.value,
      Email: EmailElement.current?.value,
      Password: PasswordElement.current?.value,
    };

    console.table(Client);

    await axios
      .post("http://localhost:8080/api/auth/login", Client)
      .then((response) => {
        console.log("00000 je suis ici 00000");
        console.log("********************************");
        console.log("response.data: ", response.data);
        localStorage.setItem("token", response.data.accessToken); // très important à ne plus jamais supprimer
        localStorage.setItem("client", response.data.Client);
        //je tente d integrer la valeur de Client dans le storage
        setTimeout(() => {
          navigate("/");
        }, 1000);
        alert("Connexion réussie !");
      })
      .catch((error) => {
        if (error.response) {
          console.log("xxxx  je suis la xxxx");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
        alert("Email ou mot de passe incorect");
      });
  };

  return (
    <div className="englobeur">
      <div className="Connect">
        <h1 className="hi">Connexion</h1>
       
        <form className="englobeur" onSubmit={handleSubmitForm}>
          <div className="englobeur">
            <label htmlFor="nameUser">Nom</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="nom"
              ref={NomElement}
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
            />
          </div>

          <div className="englobeur">
            <label htmlFor="passwordUser">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="passwordUser"
              placeholder="Password"
              ref={PasswordElement}
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

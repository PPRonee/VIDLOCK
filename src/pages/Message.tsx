import axios from "axios";
import { FormEvent, useRef } from "react";

const Message = () => {
  const NomElement = useRef<HTMLInputElement>(null);
  const EmailElement = useRef<HTMLInputElement>(null);
  const MessageElement = useRef<HTMLInputElement>(null);

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    let recupToken = localStorage.getItem("token");
    console.log("recupToken avant post message", recupToken);
    
    console.log("button form clicked");
    console.log(NomElement.current?.value);
    console.log(EmailElement.current?.value);
    console.log(MessageElement.current?.value);

    let Message = {
      Nom: NomElement.current?.value,
      Email: EmailElement.current?.value,
      Message: MessageElement.current?.value,
    };

    console.table(Message);

    await axios
      .post(
        "http://localhost:8080/api/message",
        {
          // Message
          Nom: NomElement.current?.value,
          Email: EmailElement.current?.value,
          Message: MessageElement.current?.value,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenClient")}`,
          },
        }
      )
      .then((response) => {
        console.log("00000 je suis ici 00000");
        console.log("********************************");
        console.log("response.data: ", response.data);
        //localStorage.setItem("token", response.data.token);
         // très important à ne plus jamais supprimer
        // setTimeout(() => {
        //   navigate("/");
        // }, 1000);
        alert("Message envoyé !");
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
        alert("la demande n'as pas aboutie ");
      });
  };
  return (
    <div className="englobeur">
      <div className="Connect">
        <h1 className="hi">Messagerie</h1>

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
            <label htmlFor="emailUser">Message</label>
            <input type="textarea" id="textUser" ref={MessageElement} />

            <button className="butcon" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Message;

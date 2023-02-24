import axios from "axios";
import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";




const CreationProduit = () => {
  const refproduitElement = useRef<HTMLInputElement>(null);
  const marqueElement = useRef<HTMLInputElement>(null);
  const categorieElement = useRef<HTMLInputElement>(null);
  const stock_initialElement = useRef<HTMLInputElement>(null);
  const stock_disponibleElement = useRef<HTMLInputElement>(null);
  const prix_unitElement = useRef<HTMLInputElement>(null);
  const lien_imageElement = useRef<HTMLInputElement>(null);
  const lien_videoElement = useRef<HTMLInputElement>(null);
  const tagsElement = useRef<HTMLInputElement>(null);
    const TypeElement = useRef<HTMLInputElement>(null);
    const descriptifElement = useRef<HTMLInputElement>(null);

    const handleSubmitForm = async (e: FormEvent) => {
        e.preventDefault();
        console.log("button form clicked");
        console.log(refproduitElement.current?.value);
        console.log(marqueElement.current?.value);
        console.log(categorieElement.current?.value);
        console.log(stock_initialElement.current?.value);
        console.log(stock_disponibleElement.current?.value);
        console.log(prix_unitElement.current?.value);
        console.log(lien_imageElement.current?.value);
         console.log(lien_videoElement.current?.value); 
        console.log(tagsElement.current?.value);
        console.log(TypeElement.current?.value);
        console.log(descriptifElement.current?.value);

        let Produit = {
          refproduit: refproduitElement.current?.value,
          marque: marqueElement.current?.value,
          categorie: categorieElement.current?.value,
          stock_initial: parseInt(stock_initialElement.current?.value ?? "0"),
          stock_disponible: parseInt(
            stock_disponibleElement.current?.value ?? "0"
          ),
          prix_unit: parseInt(prix_unitElement.current?.value ?? "0"),
          lien_image: lien_imageElement.current?.value,
          lien_video: lien_imageElement.current?.value,
          tags: tagsElement.current?.value,
          Type: TypeElement.current?.value,
          descriptif: descriptifElement.current?.value,
        };

//parseInt permet de convertir les element de types string en number

        console.table(Produit);

        axios
            .post("http://localhost:8080/api/produits", Produit)
            .then((response) => {
                console.log("********** reception ***********");
                console.log("response.data: ", response.data);

                alert("Le produit a été ajouté");
            })
            .catch((err) => {
                alert("Un element est incorect");
            });
    };
  

  return (
    <div className="englobeur">
      <div>
        <Link to="/AdminPage">
          <h1 className="textShadow">*** ESPACE ADMIN ***</h1>
              </Link>
              
        <h2 className="bla">*** Creation de produits ***</h2>
      </div>
      <div className="Connect">
        <h1 className="hi">Nouveau produit</h1>
        {/*<form onSubmit={(e) =>{handleSubmitForm(e)}}>*/}
        <form className="englobeur" onSubmit={handleSubmitForm}>
          <div className="englobeur">
            <label htmlFor="nameUser">refproduit</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="refproduit"
              ref={refproduitElement}
              required
              // required rend le champ obligatoire
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">marque</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="marque"
              ref={marqueElement}
              required
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">categorie</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="categorie"
              ref={categorieElement}
              required
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">stock_initial</label>
            <input
              type="number"
              className="form-control"
              id="nameUser"
              placeholder="stock_initial"
              ref={stock_initialElement}
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">stock_disponible</label>
            <input
              type="number"
              className="form-control"
              id="nameUser"
              placeholder="stock_disponible"
              ref={stock_disponibleElement}
            />
          </div>

          <div className="englobeur">
            <label htmlFor="nameUser">prix_unit</label>
            <input
              type="number"
              className="form-control"
              id="nameUser"
              placeholder="prix_unit"
              ref={prix_unitElement}
              required
            />
          </div>

          <div className="englobeur">
            <label htmlFor="emailUser">lien_image</label>
            <input
              type=""
              className="form-control"
              id="nameUser"
              placeholder="lien_image"
              ref={lien_imageElement}
              required
            />
          </div>

          <div className="englobeur">
            <label htmlFor="emailUser">lien_video</label>
            <input
              type=""
              className="form-control"
              id="nameUser"
              placeholder="lien_video"
              ref={lien_videoElement}
              required
            />
          </div>

          <div className="englobeur">
            <label htmlFor="TelUser">descriptif</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="descriptif"
              ref={descriptifElement}
              required
            />
          </div>

          <div className="englobeur">
            <label htmlFor="passwordUser">tags</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="['tags']"
              ref={tagsElement}
              required
            />
          </div>

          <div className="englobeur">
            <label htmlFor="passwordUser">Type</label>
            <input
              type="name"
              className="form-control"
              id="nameUser"
              placeholder="Type"
              ref={TypeElement}
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
    
    export default CreationProduit;
import React from "react";
import Navbar from "../components/Navbar";
import "./Procontact.css";

function Procontact() {
  return (
    <div className="App">
      <Navbar />
      <div className="englobe">
        <div className="center">
          <h1>Qui sommes nous?</h1>
          <span className="text">
            En tant que professionnels passionnée de cinéma et d'audiovisuel,
            nous mettons notre savoir-faire et nos connaissances au service de
            nos clients. Nous sélectionnons le matériel le plus adapté pour tous
            vos projets de tournage, que ce soit des courts-métrages, des pubs,
            des clips, etc. Nous avons une grande variété d'équipements de
            qualité pour répondre aux besoins des amateurs comme des
            professionnels expérimentés. Nos équipier vous aideront à choisir le
            matériel adapté à votre projet et à vous assister tout au long de
            votre location. Nous nous efforçons de rendre le processus de
            location aussi simple et efficace que possible pour vous permettre
            de vous concentrer sur la réalisation de votre projet...
          </span>
        </div>
       <p> <img className="imgbut" src="./Assets/Ron.webp"></img></p>
      </div>
      <h2>Contactez-nous</h2>
    </div>
  );
}

export default Procontact;

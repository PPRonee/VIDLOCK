import React from "react";
import Navbar from "../components/Navbar";

const Page404 = () => {
  return (
    <div >
      <Navbar />
      <div className="Tcard">
      <h1> ERREUR 404</h1>
        {/* <h2>Il n'y a rien sur cette page...</h2> */}
      </div>
    </div>
  );
};

export default Page404;

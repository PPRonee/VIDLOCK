import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="Navi">
          <NavLink to="/" className="ButNavi">
            <img className="imgbut" src="./Assets/Acc.png" alt="acceuil"></img>
            <p className="vignette">ACCUEIL</p>
          </NavLink>

          <NavLink to="/Camera" className="ButNavi">
            <img className="imgbut" src="./Assets/ursa.png" alt="cameras"></img>
            <p className="vignette">CAMERA</p>
          </NavLink>

          <NavLink to="/Audio" className="ButNavi">
            <img
              className="imgbut"
              src="./Assets/Micrec.png"
              alt="audios"
            ></img>
            <p className="vignette">AUDIOS</p>
          </NavLink>
          <NavLink to="/Lumieres" className="ButNavi">
            <img
              className="imgbut"
              src="./Assets/eclairage.png"
              alt="lumieres"
            ></img>
            <p className="vignette">LUMIERES</p>
          </NavLink>
          <NavLink to="/Accessoires" className="ButNavi">
            <img
              className="imgbut"
              src="./Assets/Accessoires.png"
              alt="accessoires"
            ></img>
            <p className="vignette">ACCESSOIRES</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

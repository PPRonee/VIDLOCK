import BanVidLocGR from "./Assets/BanVidLocGR.png";
import "./Footy.css";
import { NavLink } from "react-router-dom";


const Footy = () => {
  return (
    <div className="Footy">
      <NavLink to="/Procontact">
        <p className="pt">A propos de nous</p>
      </NavLink>
      <NavLink to="/Procontact">
        <p className="pt">Contactez-nous</p>
      </NavLink>
      <p className="Ft"> Create by RoneeP</p>
      <NavLink to="/ConexAdmin">
        <h6 className="pt">Admin</h6>
      </NavLink>
    </div>
  );
};

export default Footy;

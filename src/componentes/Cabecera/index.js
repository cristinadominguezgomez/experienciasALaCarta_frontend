import "./style.css";
import { Link } from "react-router-dom";

const Cabecera = () => {
  return (
    <div className="app_cabecera">
      <p className="menu_cabecera">MENU</p>
      <h2 className="titulo_cabecera">Experiencias A La Carta</h2>
      <Link className="link_cabecera" to="/login">
        Login
      </Link>
    </div>
  );
};
export default Cabecera;

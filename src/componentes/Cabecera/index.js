import "./style.css";
import { Link } from "react-router-dom";

// El Link to me lleva a la ruta que le indico

const Cabecera = () => {
  return (
    <div className="app_cabecera">
      <p className="menu_cabecera">Buscador</p>
      <Link className="titulo_cabecera" to="/">
        Experiencias A La Carta
      </Link>
      <Link className="link_cabecera" to="/login">
        Login
      </Link>
    </div>
  );
};
export default Cabecera;

import "./style.css";
import FormularioRegistro from "../../componentes/FormularioRegistro";
import { Link } from "react-router-dom";
const RegistroPagina = () => {
  // en la pagina de registro quiero pintar un formulario de registro y primero hago este componente
  return (
    <div className="pagina_registro">
      <h2 className="titulo_registro">Registro</h2>
      <FormularioRegistro />
      <p className="p_registro">
        Ya tienes cuenta<Link to="/login">¡Loguéate!</Link>
      </p>
    </div>
  );
};

export default RegistroPagina;

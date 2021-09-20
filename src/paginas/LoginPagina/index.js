import "./style.css";
import FormularioLogin from "../../componentes/FormularioLogin";
// el parrafo tiene que ser un link a la pagina de registro y necesito importar Link y usarlo to="/registro"
import { Link } from "react-router-dom";

const LoginPagina = () => {
  return (
    <div className="pagina_login">
      <h2 className="titulo_login">Login</h2>
      <FormularioLogin />
      <p className="p_login">
        ¿No tienes cuenta?<Link to="/registro">¡Regístrate!</Link>
      </p>
    </div>
  );
};

export default LoginPagina;

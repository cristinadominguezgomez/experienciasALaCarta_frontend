import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cabecera from "./componentes/Cabecera";
import ExperienciasPagina from "./paginas/ExperienciasPagina";
import Experiencia from "./componentes/Experiencia";
import RegistroPagina from "./paginas/RegistroPagina";
import LoginPagina from "./paginas/LoginPagina";
// para el control del token importamos nuestro provider personalizado y metemos toda nuestra aplicacion dentro de nuestro provider
import { UsuarioTokenContextoProvider } from "./contexts/UsuarioTokenContexto";

function App() {
  return (
    <Router>
      <UsuarioTokenContextoProvider>
        <Cabecera />
        <Switch>
          <Route exact path="/">
            <ExperienciasPagina />
            <Experiencia />
          </Route>
          <Route path="/registro">
            <RegistroPagina />
          </Route>
          <Route path="/login">
            <LoginPagina />
          </Route>
        </Switch>
      </UsuarioTokenContextoProvider>
    </Router>
  );
}

export default App;

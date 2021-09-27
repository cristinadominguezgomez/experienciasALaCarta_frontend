import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cabecera from "./componentes/Cabecera";
import ExperienciasPagina from "./paginas/ExperienciasPagina";
import RegistroPagina from "./paginas/RegistroPagina";
import LoginPagina from "./paginas/LoginPagina";
// para el control del token importamos nuestro provider personalizado y metemos toda nuestra aplicacion dentro de nuestro provider
import { UsuarioTokenContextoProvider } from "./contexts/UsuarioTokenContexto";
import ExperienciaPagina from "./paginas/ExperienciaPagina";
import CrearExperienciaPagina from "./paginas/CrearExperienciaPagina";

function App() {
  return (
    <Router>
      <UsuarioTokenContextoProvider>
        <Cabecera />
        <Switch>
          <Route exact path="/">
            <ExperienciasPagina />
          </Route>
          <Route path="/registro">
            <RegistroPagina />
          </Route>
          <Route path="/login">
            <LoginPagina />
          </Route>
          <Route path="/experiencia/:id">
            <ExperienciaPagina />
          </Route>
          <Route path="/crear/experiencia">
            <CrearExperienciaPagina />
          </Route>
        </Switch>
      </UsuarioTokenContextoProvider>
    </Router>
  );
}

export default App;

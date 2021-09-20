import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cabecera from "./componentes/Cabecera";
import ExperienciasPagina from "./paginas/ExperienciasPagina";
import Experiencia from "./componentes/Experiencia";
import RegistroPagina from "./paginas/RegistroPagina";
import LoginPagina from "./paginas/LoginPagina";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;

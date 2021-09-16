import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cabecera from "./componentes/Cabecera";
import ExperienciasPagina from "./paginas/ExperienciasPagina";
import Experiencia from "./componentes/Experiencia";

function App() {
  return (
    <Router>
      <Cabecera />
      <Experiencia />
      <Switch>
        <Route exact path="/">
          <ExperienciasPagina />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

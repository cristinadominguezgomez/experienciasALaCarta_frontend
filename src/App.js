import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cabecera from "./componentes/Cabecera";

function App() {
  return (
    <Router>
      <Cabecera />
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;

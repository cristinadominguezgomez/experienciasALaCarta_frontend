import "./style.css";
import { useState } from "react";
// para redirigir a los usuarios a las experiencias usamos useHistory
import { useHistory } from "react-router";
import ErrorForm from "../ErrorForm";
// para el login (usuario registrado y validado) tenemos 2 imputs para el email y la password
const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  // para hacer la logica del formulario le ponemos un onSubmit, es decir cuando el formulario
  // se envie ejecutamos la funcion login que es asyncrona y va a recibir un evento y si la respuesta es ok
  // hacemos un redirect a las entradas (useHistory)
  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/usuarios/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contraseña }),
      }
    );
    if (res.ok) {
      setError("");
      // si el login es ok redirigimos a experiencias
      history.push("/");
    } else {
      // accedo al body del error
      const error = await res.json();
      setError(error.message);
    }
  };

  return (
    <>
      <form className="login_formulario" onSubmit={login}>
        <div className="contenedor_input">
          <label htmlForm="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="contenedor_input">
          <label htmlForm="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="Login" />
      </form>

      {error && <ErrorForm error={error} />}
    </>
  );
};
export default FormularioLogin;

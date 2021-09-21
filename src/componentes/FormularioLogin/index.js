import "./style.css";
import { useState } from "react";
// para redirigir a los usuarios a las experiencias usamos useRedirect
import { Redirect } from "react-router-dom";

import ErrorForm from "../ErrorForm";
// para el login (usuario registrado y validado) tenemos 2 imputs para el email y la password

// para el control del token importamos la funcion para usar el contexto que nos devuelve el token
// nos lo devuelve en un objeto json dentro de data está el token
import { useUsuarioTokenContexto } from "../../contexts/UsuarioTokenContexto";
const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

  const [token, setToken] = useUsuarioTokenContexto();

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
      // para el control del token tengo que acceder al body.data.token
      const body = await res.json();
      setToken(body.data.token);
    } else {
      // accedo al body del error
      const error = await res.json();
      setError(error.message);
    }
  };
  //console.log("token", token);
  if (token) {
    return <Redirect to="/" />;
  }

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

// para guardar el token podemos elegir entre localStorage (aunque cierre sesion) ó sessionStorage (solo durante la sesion)
// hacemos el hook que devuelve el token cada vez ue hay un cambio y en contexto en vez de usar el useState usamos nuestro
// useSessionStorageToken

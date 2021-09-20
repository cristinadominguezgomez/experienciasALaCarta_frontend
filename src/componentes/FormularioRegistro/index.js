import "./style.css";
import { useState } from "react";
import ErrorForm from "../ErrorForm";
// para el registro (nuevo usuario) tenemos 2 imputs para el email y la password
const FormularioRegistro = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [echo, setEcho] = useState(false);

  // para hacer la logica del formulario le ponemos un onSubmit, es decir cuando el formulario
  // se envie ejecutamos la funcion registro que es asyncrona y va a recibir un evento
  const registro = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, contraseña }),
    });
    if (res.ok) {
      setError("");
      setEcho(true);
    }
  };

  // para no tener que repetirlo siempre hago un componente para los errores
  // ademas si todo va bien y recibimos el email y la contraseña quiero que desaparezca el formulario (lo meto entre llaves)
  // y uso echo para que aparezca un mensaje de "Te has registrado correctamente. Revisa tu correo para validar tu cuenta"
  // !echo - false sacame el formulario sino sacame un div con el mensaje

  return (
    <>
      {!echo ? (
        <form className="registro_formulario" onSubmit={registro}>
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
          <input type="submit" value="Registrarse" />
        </form>
      ) : (
        <div className="confirmacion_registro">
          Te has registrado correctamente. Revisa tu email para validar tu
          cuenta
        </div>
      )}
      {error && <ErrorForm error={error} />}
    </>
  );
};
export default FormularioRegistro;

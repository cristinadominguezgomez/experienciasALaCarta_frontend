import { useState, useRef } from "react";
import "./style.css";
import { useUsuarioTokenContexto } from "../../contexts/UsuarioTokenContexto";
import { useHistory } from "react-router";
import ErrorForm from "../ErrorForm";

// al crear una experiencia el administrador o los usuarios autorizados van a añadir archivos con las fotos (body form-data)
// para los inputs type file le asignamos una referencia

// le ponemos un onSubmit al formulario para hacer la funcion de crearExperiencia al pulsar el input

const FormularioCrearExperiencia = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [n_plazas, setN_plazas] = useState("");
  const [f_inicio, setF_inicio] = useState("");
  const [f_fin, setF_fin] = useState("");
  const [precio, setPrecio] = useState("");
  const ficherosInputFotosRef = useRef();
  const [token] = useUsuarioTokenContexto();
  const history = useHistory();
  const [error, setError] = useState("");

  const crearExperiencia = async (e) => {
    e.preventDefault();

    try {
      setError("");
      const fotos = ficherosInputFotosRef.current.files;

      if (fotos.length > 4) {
        throw new Error("Solo se pueden escoger 4 fotos");
      }

      // ya tenemos los ficheros y tenemos que crear un form-data y lo rellenamos con los datos
      const payload = new FormData();
      payload.append("titulo", titulo);
      payload.append("descripcion", descripcion);
      payload.append("localidad", localidad);
      payload.append("n_plazas", n_plazas);
      payload.append("f_inicio", f_inicio);
      payload.append("f_fin", f_fin);
      payload.append("precio", precio);

      for (let i = 0; i < fotos.length; i++) {
        payload.append(`foto${i}`, fotos[i]);
      }

      // hacemos un fetch a nuestro backend es tipo POST y en este caso al ser form-data, en los headers ponemos el token pero
      // al ser un form-data NO ponemos el "Content-Type"
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/experiencias`,
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: payload,
        }
      );
      console.log("res", res); // tiene que tener token sino sale como Unauthorized (importamos el token contexto)
      // si la respuesta viene ok leemos del body el id y redigimos a la pagina de la experiencia que acabamos de crear
      // si no viene ok hacemos el estado de error y despues lo importamos y lo pintamos

      if (res.ok) {
        const body = await res.json();
        history.push(`/experiencia/${body.data.id}`);
      } else {
        const error = await res.json();
        throw new Error(error.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form
        className="formulario_crear_experiencia"
        onSubmit={crearExperiencia}
      >
        <div className="contenedor_input">
          <label htmlFor="form_experiencia_titulo">Título</label>
          <input
            id="form_experiencia_titulo"
            name="form_experiencia_titulo"
            value={titulo}
            required
            onChange={(e) => {
              setTitulo(e.target.value);
            }}
          />
        </div>
        <div className="contenedor_input">
          <label htmlFor="form_experiencia_descripcion">Descripción</label>
          <input
            id="form_experiencia_descripcion"
            name="form_experiencia_descripcion"
            value={descripcion}
            required
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
          />
        </div>
        <div className="contenedor_input">
          <label htmlFor="form_experiencia_localidad">Localidad</label>
          <input
            id="form_experiencia_localidad"
            name="form_experiencia_localidad"
            required
            value={localidad}
            onChange={(e) => {
              setLocalidad(e.target.value);
            }}
          />
        </div>
        <div className="contenedor_input">
          <label htmlFor="form_experiencia_n_plazas">Número de plazas</label>
          <input
            id="form_experiencia_n_plazas"
            name="form_experiencia_n_plazas"
            required
            value={n_plazas}
            type="number"
            onChange={(e) => {
              setN_plazas(e.target.value);
            }}
          />
        </div>
        <div className="contenedor_input">
          <label htmlFor="form_experiencia_f_inicio">Fecha de inicio</label>
          <input
            id="form_experiencia_f_inicio"
            name="form_experiencia_f_inicio"
            required
            value={f_inicio}
            type="date"
            onChange={(e) => {
              setF_inicio(e.target.value);
            }}
          />
        </div>

        <div className="contenedor_input">
          <label htmlFor="form_experiencia_f_fin">Fecha de finalizacion</label>
          <input
            id="form_experiencia_f_fin"
            name="form_experiencia_f_fin"
            required
            value={f_fin}
            type="date"
            onChange={(e) => {
              setF_fin(e.target.value);
            }}
          />
        </div>
        <div className="contenedor_input">
          <label htmlFor="form_experiencia_precio">Precio</label>
          <input
            id="form_experiencia_precio"
            name="form_experiencia_precio"
            required
            value={precio}
            type="number"
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
          />
        </div>
        <input
          type="file"
          multiple
          ref={ficherosInputFotosRef}
          accept=".jpg,.png,.jpeg"
        />
        <input type="submit" value="Crear entrada" />
      </form>
      {error && <ErrorForm error={error} />}
    </>
  );
};
export default FormularioCrearExperiencia;

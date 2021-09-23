import "./style.css";
// importamos el componente Experiencia y los datos de params con useParams
import { useParams } from "react-router";
import useExperiencia from "../../hooks/useExperiencia";
import Experiencia from "../../componentes/Experiencia";

const ExperienciaPagina = () => {
  // al llamar a useParams sacamos el id
  const { id } = useParams();
  // console.log("id", id);
  // hacemos un fetch a la experiencia en el hook useExperiencia y aqui lo importamos y lo usamos y le pasamos el id
  // para que me salgan las fotos tengo que hacer un map en el componente de la experiencia
  // por si tardan en salir indico Cargando... o otra animacion

  const [experiencia] = useExperiencia(id);
  console.log("experiencia", experiencia);

  return (
    <div className="pagina_experiencia">
      {experiencia ? (
        <Experiencia
          id={experiencia.id}
          titulo={experiencia.titulo}
          descripcion={experiencia.descripcion}
          localidad={experiencia.localidad}
          n_plazas={experiencia.n_plazas}
          f_inicio={experiencia.f_inicio}
          f_fin={experiencia.f_fin}
          precio={experiencia.precio}
          votos={experiencia.votos}
          fotos={experiencia.fotos}
        ></Experiencia>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
export default ExperienciaPagina;

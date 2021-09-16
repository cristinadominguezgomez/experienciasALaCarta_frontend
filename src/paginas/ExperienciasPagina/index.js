import "./style.css";
import useExperiencias from "../../hooks/useExperiencias";
import Lista from "../../componentes/Lista";
import Experiencia from "../../componentes/Experiencia";

// importo Lista y le doy las dos propiedades la data que es el array de experiencias y el render que es lo que quiero hacer con cada una de las experiencia
// que es devolver un componente Experiencia con todas las propiedades y las fotos

const ExperienciasPagina = () => {
  const [experiencias] = useExperiencias();

  return (
    <div className="pagina_experiencias">
      <Lista
        className="listado_experiencias"
        data={experiencias}
        render={(experiencia) => (
          <Experiencia
            key={experiencia.id}
            id={experiencia.id}
            titulo={experiencia.titulo}
            localidad={experiencia.localidad0}
            n_plazas={experiencia.n_plazas}
            precio={experiencia.precio}
            votos={experiencia.votos}
          />
        )}
      />
    </div>
  );
};
export default ExperienciasPagina;
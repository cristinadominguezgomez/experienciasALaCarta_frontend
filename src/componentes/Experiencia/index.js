import "./style.css";
// en el componente experiencia le digo las propiedades que tiene pero no le doy los datos

// le ponemos un onClick para que cuando cliquemos en la experiencia nos lleve a la pagina de esa experiencias
// para eso importamos useHistory y le indicamos la ruta `experiencia/${id}`
import { useHistory } from "react-router";
// instalo e importo el Carousel para las fotos
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Experiencia = ({
  id,
  titulo,
  descripcion,
  localidad,
  n_plazas,
  f_inicio,
  f_fin,
  precio,
  votos,
  fotos,
}) => {
  const history = useHistory();
  //console.log("fotos", fotos);

  // para que me pinte las fotos en la pagina de la experiencia al ser un array le tengo que hacer un map
  // le pongo onClick para que al clicar una experiencia vaya a la pagina de la experiencia (necesitamos hacerle un push a history)

  // votos solo los vamos a pintar si llegan votos

  return (
    <div
      className="experiencia"
      onClick={() => {
        history.push(`/experiencia/${id}`);
      }}
    >
      <div className="experiencia_info_usuario"></div>
      <div className="experiencia_info">
        <p className="experiencia_titulo">{titulo}</p>
        {votos && <p className="experiencia_votos">{votos}</p>}
      </div>
      <div className="experiencia_fotos">
        {fotos.length > 0 ? (
          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
          >
            {fotos.map((foto) => (
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}/fotos/${foto.foto}`}
                key={foto.id}
                alt="Foto de la experiencia"
              />
            ))}
          </Carousel>
        ) : (
          <p>No hay fotos</p>
        )}
      </div>
      <div className="experiencia_datos">
        <p className="experiencia_f_inicio">
          {new Date(f_inicio).toLocaleDateString()}
        </p>
        <p className="experiencia_f_fin">
          {new Date(f_fin).toLocaleDateString()}
        </p>
        <p className="experiencia_localidad">{localidad}</p>
        <p className="experiencia_plazas">{n_plazas}</p>
        <p className="experiencia_descripcion">{descripcion}</p>
      </div>
      <div className="experiencia_reservar">
        <p className="experiencia_precio">{precio}</p>
        <button>Reservar</button>
      </div>
    </div>
  );
};

export default Experiencia;

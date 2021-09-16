import "./style.css";
const Experiencia = ({ id, titulo, localidad, n_plazas, precio, votos }) => {
  return (
    <div className="experiencia">
      <div className="experiencia_info_usuario"></div>
      <div className="experiencia_fotos"></div>
      <div className="experiencia_info">
        <p className="experiencia_titulo">{titulo}</p>
        <p className="experiencia_localidad">{localidad}</p>
      </div>
      <div className="experiencia_datos">
        <p className="experiencia_plazas">{n_plazas}</p>
        <p className="experiencia_precio">{precio}</p>
        <p className="experiencia_votos">{votos}</p>
      </div>
    </div>
  );
};

export default Experiencia;

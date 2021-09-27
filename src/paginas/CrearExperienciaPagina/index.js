import FormularioCrearExperiencia from "../../componentes/FormularioCrearExperiencia";
import "./style.css";

//tenemos que pintar un formulario para crear la experiencia lo creamos y lo importamos

const CrearExperienciaPagina = () => {
  return (
    <div className="crear_pagina_experiencia">
      <h2 className="crear_experiencia_titulo">Añade una experiencia</h2>
      <FormularioCrearExperiencia />
    </div>
  );
};

export default CrearExperienciaPagina;

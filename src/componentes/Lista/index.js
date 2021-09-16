import "./style.css";

// creo el componente lista y le paso los datos que recibo (data) y lo que voy a hacer con cada dato (render)
// tambien le paso por propiedades la clase asi tengo solo un componente Lista para todas las listas que necesite
const List = ({ className, data, render }) => {
  return <div className={className}>{data.map(render)}</div>;
};
export default List;

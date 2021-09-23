import { useEffect, useState } from "react";

const useExperiencia = (id) => {
  //creamos un estado y lo inicializamos con un array vacio
  const [experiencia, setExperiencia] = useState(null);

  useEffect(() => {
    //useEffect con fetch a la direccion del back solo cuando se monta el componente
    const fetchExperiencia = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/experiencias/${id}`
      );
      if (res.ok) {
        const body = await res.json();

        // accedemos a data que es la experiencia

        setExperiencia(body.data);
      }
    };

    fetchExperiencia();
  }, [id]);
  console.log("experiencia", experiencia);

  return [experiencia, setExperiencia];
};
export default useExperiencia;

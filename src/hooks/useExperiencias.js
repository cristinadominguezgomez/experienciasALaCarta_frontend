import { useState, useEffect } from "react";

const useExperiencias = () => {
  const [experiencias, setExperiencias] = useState([]);

  // fetch a la direccion del back solo cuando se monta el componente

  useEffect(() => {
    const fetchExperiencias = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/experiencias`
      );

      if (res.ok) {
        const body = await res.json();

        // accedemos a data que es la lista de experiencias

        setExperiencias(body.data);
      }
    };
    fetchExperiencias();
  }, []);

  //retornamos un array con las experiencias

  return [experiencias, setExperiencias];
};
export default useExperiencias;

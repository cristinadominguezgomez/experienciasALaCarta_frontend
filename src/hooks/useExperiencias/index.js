import { useState, useEffect } from "react";

const useExperiencias = () => {
  const [experiencias, setExperiencias] = useState([]);

  // fetch a la direccion del back solo cuando se monta el componente

  useEffect(() => {
    const fetchExperiencias = async () => {
      //console.log(process.env.REACT_APP_BACKEND_URL);
      //console.log(`${process.env.REACT_APP_BACKEND_URL}/experiencias`);

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/experiencias`
      );

      if (res.ok) {
        const body = await res.json();

        setExperiencias(body.data);
      }
    };
    fetchExperiencias();
  }, []);

  return [experiencias, setExperiencias];
};
export default useExperiencias;

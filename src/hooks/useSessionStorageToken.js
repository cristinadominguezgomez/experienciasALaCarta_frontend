import { useEffect, useState } from "react";

// en la sessionStorage en Application vamos a recibir 2 valores key y value
// queremos iniciar el estado del token con ese valor por defecto que inicialice en el contexto a "" si no existe la key
// si existe quiero que inicie el valor con el valor del token guardado
const useSessionStorageToken = (key, defaultValue) => {
  const [token, setToken] = useState(
    // se obtiene el token que esta en formato texto por eso hay que parsearlo o se coge el estado inicial de vacio
    JSON.parse(sessionStorage.getItem(key)) || defaultValue
  );
  console.log("value:", defaultValue);

  console.log("session Storage:", sessionStorage.getItem(key));
  // useEffect lo ejecutamos cada vez que cambie el token, cada vez que recargamos la pagina
  useEffect(() => {
    // se almacena el token en formato texto
    sessionStorage.setItem(key, JSON.stringify(token));
  }, [token, key]);

  //devolvemos el array con el token
  return [token, setToken];
};
export default useSessionStorageToken;

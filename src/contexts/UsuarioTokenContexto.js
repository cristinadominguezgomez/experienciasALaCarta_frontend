import { createContext, useContext } from "react";
import useSessionStorageToken from "../hooks/useSessionStorageToken";

//creamos el contexto para el token y el provider personalizado con un value que es un array con el Token y setToken
// recibe la propiedad children que se los paso al Provider
const UsuarioTokenContexto = createContext();

// para que nos guarde el token en sessionStorage cambiamos el useState por nuestro hook y le pasamos el token vacio
const UsuarioTokenContextoProvider = ({ children }) => {
  const [token, setToken] = useSessionStorageToken("token", "");
  return (
    <UsuarioTokenContexto.Provider value={[token, setToken]}>
      {children}
    </UsuarioTokenContexto.Provider>
  );
};

//creamos una funcion para llamar a este contexto en donde queramos / formulario de login / nos devuelve el token
const useUsuarioTokenContexto = () => {
  return useContext(UsuarioTokenContexto);
};

export {
  UsuarioTokenContexto,
  UsuarioTokenContextoProvider,
  useUsuarioTokenContexto,
};

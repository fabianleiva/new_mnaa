import { createContext, useContext, useEffect } from "react";

export const BootContext = createContext({ setContentReady: () => {} });

// Las páginas que quieren que el loader de entrada espere llaman a esto con `true`
// cuando su contenido principal esté listo (ver BootContext.jsx).
export const useBootContentReady = (ready) => {
  const { setContentReady } = useContext(BootContext);
  useEffect(() => {
    if (ready) {
      performance.mark("boot:content-ready");
      setContentReady(true);
    }
  }, [ready, setContentReady]);
};

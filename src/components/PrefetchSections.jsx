import { useContext, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";
import { BootContext } from "../context/bootSignal";
import { prefetchImages } from "../utils/prefetchImages";

// Cuántas fotos de cada sección se adelantan (una o dos tandas de la grilla)
const PER_SECTION = 10;
// Mismo `sizes` que usan las tarjetas de Medios (News.jsx y Publications.jsx)
const MEDIA_SIZES = "(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 100vw";

// No renderiza nada. Cuando el loader de entrada terminó, descarga en segundo plano las
// primeras fotos de las otras secciones para que aparezcan casi al instante al entrar.
const PrefetchSections = () => {
  const { news, publications } = useContext(ApiContext);
  const { bootDone } = useContext(BootContext);

  useEffect(() => {
    if (!bootDone) return;
    // respeta el modo "ahorro de datos" y las conexiones muy lentas
    const conn = navigator.connection;
    if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || "")))
      return;

    let cancel = () => {};
    const timer = setTimeout(() => {
      const items = [
        ...publications
          .slice(0, PER_SECTION)
          .map((p) => ({ url: p.acf?.image, sizes: MEDIA_SIZES })),
        ...news
          .slice(0, PER_SECTION)
          .map((n) => ({ url: n.acf?.cover, sizes: MEDIA_SIZES })),
      ];
      cancel = prefetchImages(items);
    }, 1200);
    return () => {
      clearTimeout(timer);
      cancel();
    };
  }, [bootDone, news, publications]);

  return null;
};

export default PrefetchSections;

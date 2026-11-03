import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();

const API_BASE = "https://new.mnaa.cl/wp-json/wp/v2";
const CACHE_PREFIX = "mnaa:";
// Dentro de este tiempo no se vuelve a pedir; pasado, se muestra lo guardado y se actualiza en segundo plano.
const FRESH_MS = 5 * 60 * 1000;

const readCache = (key) => {
  try {
    return JSON.parse(localStorage.getItem(CACHE_PREFIX + key));
  } catch {
    return null;
  }
};

const writeCache = (key, data) => {
  try {
    localStorage.setItem(
      CACHE_PREFIX + key,
      JSON.stringify({ ts: Date.now(), data })
    );
  } catch {
    // almacenamiento lleno o bloqueado: la web funciona igual, sin caché
  }
};

// Devuelve { data, status }: data parte desde la caché (si existe) y se refresca desde la API.
const useCachedResource = (key, url, enabled = true) => {
  const [cached] = useState(() => readCache(key));
  const [data, setData] = useState(cached?.data ?? []);
  const [status, setStatus] = useState(cached?.data ? "ready" : "loading");

  useEffect(() => {
    if (!enabled) return;
    if (cached && Date.now() - cached.ts < FRESH_MS) {
      setStatus("ready");
      return;
    }

    const controller = new AbortController();
    axios
      .get(url, { signal: controller.signal })
      .then((response) => {
        setData(response.data);
        setStatus("ready");
        writeCache(key, response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.error(error.message);
        // con datos en caché se sigue mostrando lo guardado
        setStatus(cached?.data ? "ready" : "error");
      });

    return () => controller.abort();
  }, [key, url, enabled, cached]);

  return { data, setData, status };
};

const ApiProvider = ({ children }) => {
  const projectsApiUrl = `${API_BASE}/projects?acf_format=standard&_fields=id,title,slug,acf&per_page=100`;
  const newsApiUrl = `${API_BASE}/news?acf_format=standard&_fields=id,acf&per_page=100`;
  const publicationsApiUrl = `${API_BASE}/publications?acf_format=standard&_fields=id,acf&per_page=100`;

  const {
    data: projects,
    setData: setProjects,
    status: projectsStatus,
  } = useCachedResource("projects", projectsApiUrl);

  // Noticias y publicaciones solo se usan en /media: se piden cuando los proyectos ya resolvieron.
  const projectsSettled = projectsStatus !== "loading";
  const { data: news, setData: setNews } = useCachedResource(
    "news",
    newsApiUrl,
    projectsSettled
  );
  const { data: publications, setData: setPublications } = useCachedResource(
    "publications",
    publicationsApiUrl,
    projectsSettled
  );

  return (
    <ApiContext.Provider
      value={{
        projects,
        setProjects,
        projectsStatus,
        news,
        setNews,
        publications,
        setPublications,
        projectsApiUrl,
        newsApiUrl,
        publicationsApiUrl,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

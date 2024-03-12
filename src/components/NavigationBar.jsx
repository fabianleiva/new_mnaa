import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();

  const setActiveClass = (path) => {
    return pathname.startsWith(path) ? "active" : "inactive";
  };

  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en proyectos
  const showProjectsSecondLine =
    pathname.startsWith("/projects") || pathname === "/";
  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en archivo
  const showArchiveSecondLine = pathname.startsWith("/archive");

  return (
    <>
      <header>
        <nav className="flex justify-between fixed top-6 inset-x-6 z-[100] mnaaBold">
          <div>
            <div className="flex text-lg md:text-xl webTitle">
              <NavLink className={setActiveClass("/")} to="/">
                <h3 className="pr-3">Proyectos</h3>
              </NavLink>
              <NavLink
                className={setActiveClass("/archive")}
                to="/archive/publications"
              >
                <h3 className="pr-3">Archivo</h3>
              </NavLink>
              <NavLink className={setActiveClass("/office")} to="/office">
                <h3 className="pr-3">Oficina</h3>
              </NavLink>
              <NavLink className={setActiveClass("/contact")} to="/contact">
                <h3 className="pr-3">Contacto</h3>
              </NavLink>
            </div>
            {showProjectsSecondLine && (
              <div className="flex text-lg md:text-xl webTitle">
                <NavLink className={setActiveClass("/")} to="/">
                  <h3 className="pr-1">Destacados</h3>
                </NavLink>
                <h3 className="pr-1 text-[#242424]">/</h3>
                <NavLink
                  className={setActiveClass("/projects/all")}
                  to="/projects/all"
                >
                  <h3 className="pr-1">Todos</h3>
                </NavLink>
              </div>
            )}
            {showArchiveSecondLine && (
              <div className="flex text-lg md:text-xl webTitle">
                <NavLink
                  className={setActiveClass("/archive/publications")}
                  to="/archive/publications"
                >
                  <h3 className="pr-1">Publicaciones</h3>
                </NavLink>
                <h3 className="pr-1 text-[#242424]">/</h3>
                <NavLink
                  className={setActiveClass("/archive/conferences")}
                  to="/archive/conferences"
                >
                  <h3 className="pr-1">Conferencias</h3>
                </NavLink>
              </div>
            )}
          </div>
          <div className="text-lg md:text-xl ">
            <a href="/">
              <h3 className="webTitle">Max Núñez Arquitectos</h3>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavigationBar;

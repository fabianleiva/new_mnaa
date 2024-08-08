import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();

  const [homeState, setHomeState] = useState("inactive");
  const [projectsState, setProjectsState] = useState("inactive");
  const [featuredProjectState, setFeaturedProjectState] = useState("inactive");
  const [allProjectState, setAllProjectState] = useState("inactive");
  const [newsState, setNewsState] = useState("inactive");
  const [infoState, setInfoState] = useState("inactive");

  // Setea todos los estados del menú según el pathname
  useEffect(() => {
    if (pathname === "/") {
      setHomeState("active");
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setNewsState("inactive");
      setInfoState("inactive");
    }
    if (pathname === "/projects/selected") {
      setHomeState("inactive");
      setProjectsState("active");
      setFeaturedProjectState("active");
      setAllProjectState("inactive");
      setNewsState("inactive");
      setInfoState("inactive");
    }
    if (pathname === "/projects/all") {
      setHomeState("inactive");
      setProjectsState("active");
      setFeaturedProjectState("inactive");
      setAllProjectState("active");
      setNewsState("inactive");
      setInfoState("inactive");
    }
    if (pathname === "/news") {
      setHomeState("inactive");
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setNewsState("active");
      setInfoState("inactive");
    }
    if (pathname === "/info") {
      setHomeState("inactive");
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setNewsState("inactive");
      setInfoState("active");
    }
  }, [pathname]);

  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en proyectos
  const showProjectsSecondLine = pathname.startsWith("/projects");

  return (
    <>
      <header>
        <nav className="fixed top-0 inset-x-0 z-[100] p-6">
          {/* Site title */}
          <div className="">
            <div className="flex text-lg md:text-4xl tracking-widest">
              <NavLink
                className="no-underline hover:underline font-['supreme-bold']"
                to="/"
              >
                <h3>MAX NUNEZ ARQUITECTOS</h3>
              </NavLink>
            </div>
          </div>

          {/* Site menu */}
          <div>
            <div className="flex text-sm md:text-2xl ">
              <NavLink className={homeState} to="/">
                <h3 className="pr-3">Home</h3>
              </NavLink>
              <NavLink className={projectsState} to="/projects/selected">
                <h3 className="pr-3">Proyectos</h3>
              </NavLink>
              <NavLink className={newsState} to="/news">
                <h3 className="pr-3">Noticias</h3>
              </NavLink>
              <NavLink className={infoState} to="/info">
                <h3 className="pr-3">Info</h3>
              </NavLink>
            </div>

            {showProjectsSecondLine && (
              <div className="flex text-sm md:text-2xl">
                <NavLink
                  className={featuredProjectState}
                  to="/projects/selected"
                >
                  <h3 className="pr-1">Destacados</h3>
                </NavLink>
                <h3 className="pr-1 text-[#242424]">/</h3>
                <NavLink className={allProjectState} to="/projects/all">
                  <h3 className="pr-1">Todos</h3>
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavigationBar;

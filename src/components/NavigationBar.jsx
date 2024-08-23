import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();

  const [projectsState, setProjectsState] = useState("inactive");
  const [featuredProjectState, setFeaturedProjectState] = useState("inactive");
  const [allProjectState, setAllProjectState] = useState("inactive");
  const [mediaState, setMediaState] = useState("inactive");
  const [newsState, setNewsState] = useState("inactive");
  const [publicationsState, setPublicationsState] = useState("inactive");
  const [conferencesState, setConferencesState] = useState("inactive");
  const [teamState, setTeamState] = useState("inactive");
  const [contactState, setContactState] = useState("inactive");

  // Setea todos los estados del menú según el pathname
  useEffect(() => {
    if (pathname === "/") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("inactive");
      setTeamState("inactive");
      setContactState("inactive");
    }
    if (
      pathname === "/projects/selected" ||
      pathname.startsWith("/projects/selected")
    ) {
      setProjectsState("active");
      setFeaturedProjectState("active");
      setAllProjectState("inactive");
      setMediaState("inactive");
      setNewsState("inactive");
      setPublicationsState("inactive");
      setConferencesState("inactive");
      setTeamState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/projects/all") {
      setProjectsState("active");
      setFeaturedProjectState("inactive");
      setAllProjectState("active");
      setMediaState("inactive");
      setNewsState("inactive");
      setPublicationsState("inactive");
      setConferencesState("inactive");
      setTeamState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/media/news") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("active");
      setNewsState("active");
      setPublicationsState("inactive");
      setConferencesState("inactive");
      setTeamState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/media/publications") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("active");
      setNewsState("inactive");
      setPublicationsState("active");
      setConferencesState("inactive");
      setTeamState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/media/conferences") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("active");
      setNewsState("inactive");
      setPublicationsState("inactive");
      setConferencesState("active");
      setTeamState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/team") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("inactive");
      setTeamState("active");
      setContactState("inactive");
    }
    if (pathname === "/contact") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("inactive");
      setTeamState("inactive");
      setContactState("active");
    }
  }, [pathname]);

  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en proyectos
  const showProjectsSecondLine = pathname.startsWith("/projects");

  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en proyectos
  const showMediaSecondLine = pathname.startsWith("/media");

  return (
    <>
      <header>
        <nav className="fixed top-0 inset-x-0 z-[100] p-6">
          {/* Site title */}
          <div className="">
            <div className="flex text-xl md:text-4xl tracking-wider md:tracking-widest">
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
            <div className="flex text-base md:text-2xl">
              <NavLink className={projectsState} to="/projects/selected">
                <h3 className="pr-2 md:pr-3">Proyectos</h3>
              </NavLink>
              <NavLink className={teamState} to="/team">
                <h3 className="pr-2 md:pr-3">Equipo</h3>
              </NavLink>
              <NavLink className={mediaState} to="/media/news">
                <h3 className="pr-2 md:pr-3">Medios</h3>
              </NavLink>
              <NavLink className={contactState} to="/contact">
                <h3 className="pr-2 md:pr-3">Contacto</h3>
              </NavLink>
            </div>

            {showProjectsSecondLine && (
              <div className="flex text-base md:text-2xl">
                <NavLink
                  className={featuredProjectState}
                  to="/projects/selected"
                >
                  <h3 className="pr-1">Destacados</h3>
                </NavLink>
                <h3 className="pr-1 text-[#999999]">/</h3>
                <NavLink className={allProjectState} to="/projects/all">
                  <h3 className="pr-1">Todos</h3>
                </NavLink>
              </div>
            )}

            {showMediaSecondLine && (
              <div className="flex text-base md:text-2xl">
                <NavLink className={newsState} to="/media/news">
                  <h3 className="pr-1">Noticias</h3>
                </NavLink>
                <h3 className="pr-1 text-[#999999]">/</h3>
                <NavLink className={publicationsState} to="/media/publications">
                  <h3 className="pr-1">Publicaciones</h3>
                </NavLink>
                <h3 className="pr-1 text-[#999999]">/</h3>
                <NavLink className={conferencesState} to="/media/conferences">
                  <h3 className="pr-1">Conferencias</h3>
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

import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <>
      <header>
        <nav>
          <div className="linkSection">
            <NavLink className={setActiveClass} to="/">
              <h3>HOME,</h3>
            </NavLink>
            <NavLink className={setActiveClass} to="/projects">
              <h3>PROYECTOS,</h3>
            </NavLink>
            <NavLink className={setActiveClass} to="/archive">
              <h3>ARCHIVO,</h3>
            </NavLink>
            <NavLink className={setActiveClass} to="/office">
              <h3>OFICINA</h3>
            </NavLink>
          </div>
          <div className="nameSection">
            <NavLink className={setActiveClass} to="/">
              <h3 className="webName">MAX NÚÑEZ ARQUITECTOS</h3>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavigationBar;

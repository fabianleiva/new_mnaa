import "animate.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import FeaturedProjects from "./views/Projects";
import ProjectGallery from "./components/ProjectGallery";
import Archive from "./views/Archive";
import Office from "./views/Office";
import NotFound from "./views/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<FeaturedProjects />}></Route>
        <Route path="/projects/:projectSlug" element={<ProjectGallery />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/office" element={<Office />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

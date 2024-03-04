import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Projects from "./views/Projects";
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
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/office" element={<Office />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const apiUrl =
    "https://new.mnaa.cl/wp/wp-json/wp/v2/projects?acf_format=standard&_fields=id,title,acf&per_page=99";

  const getAllProjects = async () => {
    try {
      const response = await axios.get(apiUrl);
      const posts = response.data;
      setProjects(posts);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        projects,
        setProjects,
        apiUrl,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

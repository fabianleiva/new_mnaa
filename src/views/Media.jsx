import { useParams } from "react-router";
import News from "../components/News";
import Publications from "../components/Publications";
import Conferences from "../components/Conferences";
const Media = () => {
  const { mediaState } = useParams();

  return (
    <main className="mt-[25vh] px-6">
      {mediaState === "news" && (
        <>
          <News />
        </>
      )}
      {mediaState === "publications" && (
        <>
          <Publications />
        </>
      )}
      {mediaState === "conferences" && (
        <>
          <Conferences />
        </>
      )}
    </main>
  );
};

export default Media;

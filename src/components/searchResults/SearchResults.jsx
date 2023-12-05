import "./SearchResults.css";
import Song from "../song/Song";

function SearchResults(props) {
  return (
    <div className="container">
      <Song title="Hard Coded title" artist="Cool Name" album="Suave title" />
    </div>
  );
}

export default SearchResults;

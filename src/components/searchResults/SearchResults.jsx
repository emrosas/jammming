import "./SearchResults.css";
import Song from "../song/Song";

function SearchResults(props) {
  let { results } = props;
  return (
    <div className="container">
      <h2>Search Results</h2>
      {results.map((result) => (
        <Song
          key={result.id}
          title={result.name}
          artist={result.artist}
          album={result.album}
        />
      ))}
    </div>
  );
}

export default SearchResults;

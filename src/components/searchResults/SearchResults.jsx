import "./SearchResults.css";
import Song from "../song/Song";

function SearchResults(props) {
  let { songs, searchTerm } = props;
  console.log(searchTerm);
  const results = songs.filter(
    (song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      {searchTerm ? (
        <h2>You Searched: {searchTerm}</h2>
      ) : (
        <h2>Search Results</h2>
      )}
      {searchTerm ? (
        results.map((song) => (
          <Song
            key={song.id}
            title={song.name}
            artist={song.artist}
            album={song.album}
          />
        ))
      ) : (
        <p>Nothing to see here...</p>
      )}
    </div>
  );
}

export default SearchResults;

import "./SearchResults.css";
import Song from "../song/Song";

function SearchResults(props) {
  let { songs, searchTerm, addSongToPlaylist } = props;
  const results = songs.filter(
    (song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      {searchTerm ? (
        <div className="searched">
          <h2>You Searched:</h2>
          <p>{searchTerm}</p>
        </div>
      ) : (
        <h2>Search Results</h2>
      )}
      {searchTerm ? (
        results.map((song) => (
          <Song
            key={song.id}
            name={song.name}
            id={song.id}
            uri={song.uri}
            artist={song.artist}
            album={song.album}
            addSongToPlaylist={addSongToPlaylist}
          />
        ))
      ) : (
        <p>Nothing to see here...</p>
      )}
    </div>
  );
}

export default SearchResults;

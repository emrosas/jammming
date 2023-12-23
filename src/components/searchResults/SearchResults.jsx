import "./SearchResults.css";
import Song from "../song/Song";

function SearchResults(props) {
  let { songs, addSongToPlaylist } = props;

  return (
    <div className="container">
      <h2>Search Results</h2>
      {songs ? (
        songs.map((song) => (
          <Song
            key={song.id}
            name={song.name}
            id={song.id}
            uri={song.uri}
            album={song.album.name}
            artist={song.artists[0].name}
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

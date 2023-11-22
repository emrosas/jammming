import Song from "../song/Song";
import "./NewPlaylist.css";

function NewPlaylist() {
  return (
    <div className="playlist">
      <div className="playlist-header">
        <h3>My New Playlist</h3>
        <button>Add Playlist</button>
      </div>
      <div className="playlist-body">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
      </div>
    </div>
  );
}

export default NewPlaylist;

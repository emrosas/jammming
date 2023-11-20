import "./NewPlaylist.css";

function NewPlaylist() {
  return (
    <div className="playlist">
      <div className="playlist-header">
        <h3>My New Playlist</h3>
        <button>Add Playlist</button>
      </div>
      <div className="playlist-body">
        <p>Here goes a song</p>
        <p>Here goes a song</p>
        <p>Here goes a song</p>
      </div>
    </div>
  );
}

export default NewPlaylist;

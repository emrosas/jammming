import Song from "../song/Song";
import "./NewPlaylist.css";
import addPlaylist from "../../assets/add-playlist.svg";

function NewPlaylist({ addedSongs, removeSongFromPlaylist }) {
  return (
    <div className="playlist">
      <div className="playlist-header">
        <h3>My New Playlist</h3>
        <button>
          Add Playlist <img src={addPlaylist} alt="Playlist and plus sign" />
        </button>
      </div>
      <div className="playlist-body">
        {addedSongs.map((song, index) => (
          <Song
            key={index}
            name={song.name}
            album={song.album}
            artist={song.artist}
            removeSongFromPlaylist={removeSongFromPlaylist}
            index={index}
            added={true}
          />
        ))}
      </div>
    </div>
  );
}

export default NewPlaylist;

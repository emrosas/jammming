import { useState } from "react";
import Song from "../song/Song";
import "./NewPlaylist.css";
import search from "../../assets/search-icon.svg";

function NewPlaylist({ addedSongs, removeSongFromPlaylist }) {
  const [playlistName, setPlaylistName] = useState("New Playlist Name");

  const handleClick = () => {
    setPlaylistName("");
  };

  const addPlaylist = () => {
    //Add playlist to database
    const playlistData = {
      playlistName,
      songs: addedSongs,
    };
    console.log(playlistData);
  };

  return (
    <div className="playlist">
      <div className="playlist-header">
        <input
          className="playlist-name"
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          onClick={handleClick}
        />
        <button className="add-playlist" onClick={addPlaylist}>
          Add Playlist <img src={search} alt="Playlist and plus sign" />
        </button>
      </div>
      <div className="playlist-body">
        {addedSongs.length > 0 ? (
          addedSongs.map((song, index) => (
            <Song
              key={index}
              name={song.name}
              album={song.album}
              artist={song.artist}
              removeSongFromPlaylist={removeSongFromPlaylist}
              index={index}
              added={true}
            />
          ))
        ) : (
          <p>No Songs Added.</p>
        )}
      </div>
    </div>
  );
}

export default NewPlaylist;

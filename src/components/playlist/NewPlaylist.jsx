import { useState } from "react";
import Song from "../song/Song";
import "./NewPlaylist.css";
import search from "../../assets/search-icon.svg";

function NewPlaylist({
  addedSongs,
  addedSongsURI,
  playlistName,
  setPlaylistName,
  removeSongFromPlaylist,
  resetPlaylist,
  resetPlaylistName,
  playlistNamePlaceholder,
  userData,
}) {
  const addPlaylist = () => {
    const playlistData = {
      name: playlistName,
      description: "New playlist description",
      public: true,
    };

    const accessToken = localStorage.getItem("spotify_access_token");

    // //POST request to /v1/users/{user_id}/playlists endpoint
    fetch(`https://api.spotify.com/v1/users/${userData.id}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(playlistData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const playlistID = data.id;
        const uriList = {
          uris: addedSongsURI,
        };
        //POST request to /v1/users/{user_id}/playlists/{playlist_id}/tracks endpoint
        return fetch(
          `https://api.spotify.com/v1/users/${userData.id}/playlists/${playlistID}/tracks`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(uriList),
          }
        );
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    playlistNamePlaceholder();
    resetPlaylist();
  };

  const clearSongs = () => {
    resetPlaylist();
  };

  return (
    <div className="playlist">
      <div className="playlist-header">
        <input
          className="playlist-name"
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          onClick={resetPlaylistName}
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
        {addedSongs.length > 0 && (
          <button onClick={clearSongs} className="clear-button">
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default NewPlaylist;

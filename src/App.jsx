import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import NewPlaylist from "./components/playlist/NewPlaylist";

function App() {
  //Add new state for error handling
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  //Requests the user's data from the Spotify API
  useEffect(() => {
    const accessToken = localStorage.getItem("spotify_access_token");
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUserData(data))
      //handles the error if it is thrown
      .catch((error) => setError(error));
  }, []);

  //Holds the search results
  const [searchResults, setSearchResults] = useState("");
  //Gets the search results and sets the state
  const newSearch = (search) => {
    searchSongs(search).then((songs) => {
      setSearchResults(songs);
    });
  };
  //Requests the search results from the Spotify API
  const searchSongs = (query) => {
    const accessToken = localStorage.getItem("spotify_access_token");
    const url = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(
      query
    )}`;

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data.tracks.items);
  };

  //Holds the playlist name
  const [playlistName, setPlaylistName] = useState("New Playlist Name");
  //Resets the playlist name back to an empty string
  const resetPlaylistName = () => {
    setPlaylistName("");
  };
  //Resets the playlist name back to the default
  const playlistNamePlaceholder = () => {
    setPlaylistName("New Playlist Name");
  };

  //Selecting songs to add to New Playlist
  const [addedSongs, setAddedSongs] = useState([]);
  //Getting the added songs URI property
  const addedSongsURI = addedSongs.map((song) => song.uri);
  //Adds a song to the playlist if it is not already in the playlist
  const addSongToPlaylist = (newSong) => {
    if (!addedSongs.some((song) => song.id === newSong.id)) {
      setAddedSongs([...addedSongs, newSong]);
    }
  };
  //Removes a song from the playlist
  const removeSongFromPlaylist = (index) => {
    const updatedSongs = [...addedSongs];
    updatedSongs.splice(index, 1);
    setAddedSongs(updatedSongs);
  };
  //Resets the playlist back to an empty array
  const resetPlaylist = () => {
    setAddedSongs([]);
  };

  return (
    <main>
      <div className="bg-image" />
      <Header userData={userData} />
      <SearchBar newSearch={newSearch} />
      <div className="columns">
        <SearchResults
          songs={searchResults}
          addSongToPlaylist={addSongToPlaylist}
        />
        <NewPlaylist
          addedSongs={addedSongs}
          removeSongFromPlaylist={removeSongFromPlaylist}
          addedSongsURI={addedSongsURI}
          resetPlaylist={resetPlaylist}
          playlistName={playlistName}
          resetPlaylistName={resetPlaylistName}
          setPlaylistName={setPlaylistName}
          playlistNamePlaceholder={playlistNamePlaceholder}
          // userData={userData}
        />
      </div>
    </main>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import NewPlaylist from "./components/playlist/NewPlaylist";
import mockSongs from "./mockSongs";

function App() {
  //Search funcionality
  const [searchResults, setSearchResults] = useState("");

  const newSearch = (search) => {
    searchSongs(search).then((songs) => {
      setSearchResults(songs);
    });
  };

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

  //New Playlist name
  const [playlistName, setPlaylistName] = useState("New Playlist Name");

  const resetPlaylistName = () => {
    setPlaylistName("");
  };

  const playlistNamePlaceholder = () => {
    setPlaylistName("New Playlist Name");
  };

  //Selecting songs to add to New Playlist
  const [addedSongs, setAddedSongs] = useState([]);
  //Getting the added songs URI property
  const addedSongsURI = addedSongs.map((song) => song.uri);

  const addSongToPlaylist = (newSong) => {
    if (!addedSongs.some((song) => song.id === newSong.id)) {
      setAddedSongs([...addedSongs, newSong]);
    }
  };

  const removeSongFromPlaylist = (index) => {
    const updatedSongs = [...addedSongs];
    updatedSongs.splice(index, 1);
    setAddedSongs(updatedSongs);
  };

  const resetPlaylist = () => {
    setAddedSongs([]);
  };

  return (
    <main>
      <div className="bg-image" />
      <Header />
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
        />
      </div>
    </main>
  );
}

export default App;

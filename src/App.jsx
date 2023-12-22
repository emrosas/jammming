import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import NewPlaylist from "./components/playlist/NewPlaylist";
import mockSongs from "./mockSongs";

function App() {
  //Search funcionality
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (newSearch) => {
    setSearchTerm(newSearch);
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
      <SearchBar updateSearchTerm={updateSearchTerm} />
      <div className="columns">
        <SearchResults
          songs={mockSongs}
          searchTerm={searchTerm}
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

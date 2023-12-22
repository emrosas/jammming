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

  //Selecting songs to add to New Playlist
  const [addedSongs, setAddedSongs] = useState([]);

  const addSongToPlaylist = (newSong) => {
    if (!addedSongs.some((song) => song.id === newSong.id)) {
      setAddedSongs([...addedSongs, newSong]);
    }
  };

  console.log(addedSongs);

  const removeSongFromPlaylist = (index) => {
    const updatedSongs = [...addedSongs];
    updatedSongs.splice(index, 1);
    setAddedSongs(updatedSongs);
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
          removeSongFromPlaylist={removeSongFromPlaylist}
        />
        <NewPlaylist
          addedSongs={addedSongs}
          removeSongFromPlaylist={removeSongFromPlaylist}
        />
      </div>
    </main>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import NewPlaylist from "./components/playlist/NewPlaylist";
import mockSongs from "./mockSongs";

function App() {
  const [searchTerm, setSearchTerm] = useState("Initial State");

  const updateSearchTerm = (newSearch) => {
    setSearchTerm(newSearch);
  };

  return (
    <main>
      <div className="bg-image" />
      <Header />
      <SearchBar updateSearchTerm={updateSearchTerm} />
      <p>Value in parent: {searchTerm}</p>
      <div className="columns">
        <SearchResults results={mockSongs} />
        <NewPlaylist />
      </div>
    </main>
  );
}

export default App;

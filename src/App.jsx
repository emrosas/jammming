import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import NewPlaylist from "./components/playlist/NewPlaylist";
import mockSongs from "./mockSongs";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (newSearch) => {
    setSearchTerm(newSearch);
  };

  return (
    <main>
      <div className="bg-image" />
      <Header />
      <SearchBar updateSearchTerm={updateSearchTerm} />
      <div className="columns">
        <SearchResults songs={mockSongs} searchTerm={searchTerm} />
        <NewPlaylist />
      </div>
    </main>
  );
}

export default App;

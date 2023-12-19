import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import NewPlaylist from "./components/playlist/NewPlaylist";
import mockSongs from "./mockSongs";

function App() {
  return (
    <main>
      <div className="bg-image" />
      <Header />
      <SearchBar />
      <div className="columns">
        <SearchResults results={mockSongs} />
        <NewPlaylist />
      </div>
    </main>
  );
}

export default App;

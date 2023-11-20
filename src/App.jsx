import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import NewPlaylist from "./components/playlist/NewPlaylist";

function App() {
  return (
    <main>
      <div className="bg-image" />
      <Header />
      <div className="columns">
        <section id="search-section">
          <SearchBar />
        </section>
        <section id="playlist">
          <NewPlaylist />
        </section>
      </div>
    </main>
  );
}

export default App;

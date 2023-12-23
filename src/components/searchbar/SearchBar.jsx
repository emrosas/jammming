import "./SearchBar.css";
import searchIcon from "../../assets/search-icon.svg";
import { useState } from "react";

function SearchBar({ newSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const updatedValue = e.target.value;
    setInputValue(updatedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newSearch(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          value={inputValue}
          placeholder="Search..."
          onChange={handleChange}
          className="search-bar"
        />
        <button type="submit" className="search-button">
          <img
            className="icon"
            src={searchIcon}
            alt="Magnifying glass with plus sign in the middle"
          />
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;

import "./SearchBar.css";
import searchIcon from "../../assets/search-icon.svg";
import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form action="">
      <input
        id="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button>
        <img
          className="icon"
          src={searchIcon}
          alt="Magnifying glass with plus sign in the middle"
        />
        Search
      </button>
    </form>
  );
}

export default SearchBar;

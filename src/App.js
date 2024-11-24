import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import tracks from "./Songs";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (input) => {
    setSearch(input);
  };

  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar onSearch={handleSearch} />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <SearchResults value={search} />
        <Playlist />
      </div>
      <button>Save to Spotify</button>
    </div>
  );
}

export default App;

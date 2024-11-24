import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar(props) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        id="inputSearch"
        placeholder="Search"
        value={search}
        className={styles.SearchBar}
        onChange={handleChange}
        required
      />
      <button
        onClick={() => {
          props.onSearch(search);
          setSearch("");
        }}
        className={styles.SearchButton}
      >
        Search
      </button>
    </>
  );
}
export default SearchBar;

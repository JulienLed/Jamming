import styles from "./SearchResults.module.css";
import tracks from "./Songs";

function SearchResults(props) {
  return (
    <div>
      {tracks.map((track) =>
        track.name == props.value ? (
          <>
            <div>{track.name}</div>
            <div>{track.artist}</div>
            <div>{track.album}</div>
          </>
        ) : null
      )}
    </div>
  );
}

export default SearchResults;

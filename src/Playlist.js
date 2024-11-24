import styles from "./Playlist.module.css";
import Tracklist from "./Tracklist.js";

function Playlist(props) {
  return (
    <div className={styles.Playlist}>
      <p id="playlistName">Le nom de la playlist</p>
      <Tracklist />
    </div>
  );
}

export default Playlist;

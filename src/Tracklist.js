import styles from "./Tracklist.module.css";
import Track from "./Track.js";

function Tracklist(props) {
  return (
    <div id="tracklist" className={styles.Tracklist}>
      <p>La liste des chansons de la playlist</p>
      <Track />
    </div>
  );
}

export default Tracklist;

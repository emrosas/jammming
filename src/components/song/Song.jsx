import "./Song.css";
import plus from "../../assets/plus.svg";

function Song(props) {
  let { title, artist, album } = props;
  return (
    <div className="song-wrapper">
      <div>
        <h3>{title}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      <div className="song-button">
        <img src={plus} alt="Plus sign" />
      </div>
    </div>
  );
}

export default Song;

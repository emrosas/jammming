import "./Song.css";
import plus from "../../assets/plus.svg";

function Song() {
  return (
    <div className="song-wrapper">
      <div>
        <h3>Here goes a song title</h3>
        <p>Artist name here | Song name here</p>
      </div>
      <div className="song-button">
        <img src={plus} alt="Plus sign" />
      </div>
    </div>
  );
}

export default Song;

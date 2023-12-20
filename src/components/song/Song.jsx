import "./Song.css";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

function Song(props) {
  // let { name, artist, album, addSongToPlaylist } = props;
  const { addSongToPlaylist, removeSongFromPlaylist, ...song } = props;

  const handleAdd = () => {
    addSongToPlaylist(song);
  };

  const handleRemove = () => {
    removeSongFromPlaylist(song);
  };

  return (
    <div className="song-wrapper">
      <div>
        <h3>{song.name}</h3>
        <p>
          {song.artist} | {song.album}
        </p>
      </div>
      <button className="song-button" onClick={handleAdd}>
        <img src={plus} alt="Plus sign" />
      </button>
      <button className="song-button" onClick={handleRemove}>
        <img src={minus} alt="Plus sign" />
      </button>
    </div>
  );
}

export default Song;

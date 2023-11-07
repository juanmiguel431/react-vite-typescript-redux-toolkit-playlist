import React from 'react';
import { createRandomSong } from '../data';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';

const SongPlaylist: React.FC = () => {

  const songPlaylist = useAppSelector(state => state.songs);

  const { addSong, deleteSong } = useActions();

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => deleteSong(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => addSong(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
};

export default SongPlaylist;

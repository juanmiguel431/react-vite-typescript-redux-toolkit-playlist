import './index.css';
import MoviePlaylist from './components/MoviePlaylist.tsx';
import SongPlaylist from './components/SongPlaylist.tsx';
import { useActions } from './hooks/store/useActions.ts';

function App() {

  const { appReset } = useActions();

  return (
    <div className="container is-fluid">
      <button onClick={() => appReset()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

export default App;

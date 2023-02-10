import React from 'react';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';


import SongBar from './SongBar';
const handlePauseClick = () => {
  dispatch(playPause(false));
};

const handlePlayClick = (song, i) => {
  dispatch(setActiveSong({ song, data, i }));
  dispatch(playPause(true));
};


const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      
      {data?.map((song, i) => (
        <SongBar
          key={`${artistId}-${song.key}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          
        />
      ))}
    </div>
    
  </div>
);

export default RelatedSongs;

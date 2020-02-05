import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
  <AudioPlayer
    // autoPlay
    src="https://ccrma.stanford.edu/~jos/mp3/cello.mp3"
    onPlay={() => console.log('onPlay')}
  />
);

export default Player;

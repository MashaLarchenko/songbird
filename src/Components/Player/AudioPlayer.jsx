/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PropTypes from 'prop-types';

function Player({ link, play, style, level }) {
  let prevlevel = level;
console.log(play);

  return (
    <AudioPlayer
      ref={element => {
        prevlevel = element;
      }}
      src={link}
      autoplay={play}
      className={style}
      autoPlayAfterSrcChange={false}
    />
  );
}
Player.propTypes = {
  link: PropTypes.string,
};

export default Player;

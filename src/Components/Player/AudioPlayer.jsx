import React, { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PropTypes from 'prop-types';

function Player({ link, play}) {
  return <AudioPlayer src={link} autoplay={play} autoPlayAfterSrcChange={false} />;
}

Player.propTypes = {
  link: PropTypes.string,
  play: PropTypes.bool,
};
Player.defaultProps = {
  link: '',
  play: false,
};

export default Player;

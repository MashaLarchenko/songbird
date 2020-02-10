/* eslint-disable react/require-default-props */
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PropTypes from 'prop-types';

function Player({ link }) {
    return <AudioPlayer autoPlay={false} src={link} onPlay={() => console.log('onPlay')} />;
}
Player.propTypes = {
    link: PropTypes.string,
};

export default Player;

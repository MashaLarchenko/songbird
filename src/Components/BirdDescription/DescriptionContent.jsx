import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Player from '../Player/AudioPlayer';
import Loading from '../Loading';



export default function DescriptionContent({image, birdData, selectedBird, loading}) {
  return (
    <CardContent>
      <div className="cardHeader">
        <img src={image} alt="unknownbird" className='cardImage' />
        <Typography variant="h5" component="h5" className="name">
          {birdData.en}
        </Typography>
        <Typography variant="h6" component="h6" className="latinName">
          {selectedBird.species}
        </Typography>
      </div>
     {loading ? <Loading/> : <Player link={birdData.file} play={false} />}
      <p className="description">{selectedBird.description}</p>
    </CardContent>
  );
}

DescriptionContent.propTypes = {
  image: PropTypes.string.isRequired,
}

/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
// import Context from '../context';
import Player from './AudioPlayer';
import birdState from './birdState';

const useStyle = makeStyles(() => ({
    sectionWrapper: {
        backgroundColor: 'rgba(48,48,48, .9)',
    },
    typog: {
        color: 'white',
    },
    image: {
        width: '35%',
    },
}));

function BirdDescription({ levelCount, selectedBirdId, startQ, birdData, image }) {
    const styles = useStyle();
    const selectedBird = birdState[0][levelCount][selectedBirdId - 1];

    return (
      <Card className={styles.sectionWrapper}>
          {startQ ? (
          <CardContent>
                    <img src={image} alt="unknownbird" className={styles.image} />
                    <Typography variant="h4" component="h4" className={styles.typog}>
              {birdData.en}
            </Typography>
                    <Typography variant="h5" component="h5" className={styles.typog}>
              {selectedBird.species}
            </Typography>
                    <Typography variant="h5" component="h5" className={styles.typog}>
              Location
                        {birdData.loc}
            </Typography>
                    <Player link={birdData.file} />
                  <p className={styles.typog}>{selectedBird.description}</p>
                </CardContent>
            ) : (
                'no data'
            )}
        </Card>
    );
}

BirdDescription.propTypes = {
    levelCount: PropTypes.number.isRequired,
    selectedBirdId: PropTypes.number,
    startQ: PropTypes.bool.isRequired,
};

export default BirdDescription;

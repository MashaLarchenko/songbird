/* eslint-disable react/require-default-props */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
// import Context from '../context';
import DescriptionContent from './DescriptionContent';
import DefaultText from '../DefaultText';
import birdState from '../birdState';

const useStyle = makeStyles(() => ({
  sectionWrapper: {
    backgroundColor: 'rgba(48,48,48, .9)',
  },
}));

function BirdDescription({ levelCount, selectedBirdId, startQ, birdData, image, loading}) {
  const styles = useStyle();
  const classes = [styles.sectionWrapper, 'birdDescriptionSection'];
  const selectedBird = birdState[0][levelCount][selectedBirdId - 1];
  return (
    <Card className={classes.join(' ')}>
      {startQ ? (
       <DescriptionContent image={image} selectedBird={selectedBird} birdData={birdData} loading={loading} />
      ) : (
        <DefaultText />
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Player from './AudioPlayer';

// import Context from '../context';

const useStyle = makeStyles(() => ({
  typog: {
    color: 'white',
  },
}));

function BirdItem({ name, species, id, clickHandler, classes, birdData }) {
  const styles = useStyle();
  console.log(birdData.song);
  return (
    <ListItem className={styles.typog}>
      <button
        type="button"
        className={classes.join(' ')}
        onClick={() => {
          clickHandler(species, id);
        }}
      >
        {name}
      </button>
      <Player link={birdData.song} play={true} style={'listItemAudio'}/>
    </ListItem>
  );
}

BirdItem.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  // setImage: PropTypes.func.isRequired,
  // setData: PropTypes.func.isRequired,
  // setAnswerState: PropTypes.func.isRequired,
  // isAnswerState: PropTypes.objectOf(PropTypes.bool).isRequired,
  id: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BirdItem;

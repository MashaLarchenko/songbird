import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const useStyle = makeStyles(() => ({
  typog: {
    color: 'white',
  },
}));

function BirdItem({ name, species, id, clickHandler, classes, birdData }) {
  const styles = useStyle();
  return (
    <ListItem className={styles.typog}>
      <button
        type="button"
        className={classes.join(' ')}
        onClick={e => {
          clickHandler(species, id, e);
        }}
      >
        {name}
      </button>
    </ListItem>
  );
}

BirdItem.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BirdItem;

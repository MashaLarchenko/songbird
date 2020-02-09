import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
// import Context from '../context';

const useStyle = makeStyles(() => ({
  typog: {
    color: 'white',
  },
}));

function BirdItem({
  name, species, id, clickHandler, classes, isAnswerState,
}) {
  const styles = useStyle();
  console.log(classes);

  return (
    <ListItem className={styles.typog}>
      <button
        type="button"
        onClick={clickHandler.bind(null, species, id)}
        className={isAnswerState.color}
      >
        {name}
      </button>
    </ListItem>
  );
}

BirdItem.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  // setImage: PropTypes.func.isRequired,
  // setData: PropTypes.func.isRequired,
  // setAnswerState: PropTypes.func.isRequired,
  isAnswerState: PropTypes.objectOf(PropTypes.bool).isRequired,
  id: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
};

export default BirdItem;

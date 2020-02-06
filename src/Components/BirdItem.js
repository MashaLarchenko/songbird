import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const useStyle = makeStyles(() => ({
  typog: {
    color: 'white',
  },
}));

function BirdItem({ name }) {
  const styles = useStyle();
  return (
    <ListItem className={styles.typog}>
      <span className="check-btn" />
      {name}
    </ListItem>
  );
}

BirdItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BirdItem;

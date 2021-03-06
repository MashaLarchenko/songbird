import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import BirdItem from './BirdItem';
import birdState from '../birdState';

const useStyle = makeStyles(() => ({
  sectionWrapper: {
    backgroundColor: 'rgba(48,48,48, .9)',
  },
  root: {
    padding: '10px',
  },
}));

function BirdList({ levelCount, clickHandler, birdData }) {
  const styles = useStyle();
  const classes = [styles.sectionWrapper, 'birdListSection'];
  const birdList = birdState[0][levelCount];
  return (
    <Card className={classes.join(' ')}>
      <CardContent className={styles.root}>
        <List>
          {birdList.map(bird => (
            <BirdItem
              name={bird.name}
              key={bird.id}
              species={bird.species}
              id={bird.id}
              clickHandler={clickHandler}
              classes={bird.status}
              birdData={birdData}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

BirdList.propTypes = {
  levelCount: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default BirdList;

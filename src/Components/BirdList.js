/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
// import Context from '../context';
import BirdItem from './BirdItem';
import birdState from './birdState';


const useStyle = makeStyles(() => ({
  sectionWrapper: {
    backgroundColor: 'rgba(48,48,48, .9)',
  },
}));

export default function BirdList({
  levelCount,
  setImage, setData, setAnswerState, isAnswerState,
}) {
  const styles = useStyle();
  console.log(isAnswerState);
  // const { birdData } = useContext(Context);
  const birdList = birdState[0][levelCount];

  return (
    <Card className={styles.sectionWrapper}>
      <CardContent>
        <List>
          {birdList.map((bird) => (
            <BirdItem
              name={bird.name}
              key={bird.id}
              species={bird.species}
              setImage={setImage}
              setData={setData}
              setAnswerState={setAnswerState}
              isAnswerState={isAnswerState}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

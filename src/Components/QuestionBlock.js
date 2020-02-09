/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Player from './AudioPlayer';
// import Context from '../context';
// import birdState from './birdState';


const useStyle = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    padding: '2%',
    backgroundColor: 'rgba(48,48,48, .9)',
  },
  audio: {
    paddingTop: '5%',
  },
  typog: {
    color: 'white',
  },
  image: {
    width: '100%',
  },
}));

export default function QuestionBlock({ rightAnswer, isAnswerState }) {
  const classes = useStyle();
  return (
    <Container>
      <Card className={classes.container}>
        <CardContent>
          { (isAnswerState) ? <img src={rightAnswer.cryptImage} alt="unknownbird" className={classes.image} />
            : <img src={rightAnswer.image} alt="unknownbird" className={classes.image} />}

        </CardContent>
        <div className={classes.audio}>
          <Typography variant="h5" component="h5" className={classes.typog}>
            { isAnswerState ? rightAnswer.cryptTitle : rightAnswer.title}
          </Typography>
          <Player link={rightAnswer.audio} />
        </div>
      </Card>
    </Container>
  );
}

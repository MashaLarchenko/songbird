import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Player from './AudioPlayer';
import Context from '../context';


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
}));

export default function QuestionBlock() {
  const classes = useStyle();
  const { birdData } = useContext(Context);
  return (
    <Container>
      <Card className={classes.container}>
        <CardContent>
          <img src="src/assets/unknownbird.jpg" alt="unknownbird" />
        </CardContent>
        <div className={classes.audio}>
          <Typography variant="h5" component="h5" className={classes.typog}>

            *****

          </Typography>
          <Player link={birdData.file} />
        </div>
      </Card>
    </Container>
  );
}

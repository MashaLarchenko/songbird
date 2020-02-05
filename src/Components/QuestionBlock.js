import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from './AudioPlayer';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyle = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    padding: '2%',
    backgroundColor: '#303030',
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
          <AudioPlayer />
        </div>
      </Card>
    </Container>
  );
}

import React from 'react';
import { Container } from '@material-ui/core';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from './AudioPlayer';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

const style = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    padding: '2%',
  },
  audio: {
    paddingTop: '5%',
  },
};

export default function QuestionBlock() {
  return (
    <Container className="sectionWrapper">
      <Card style={style.container}>
        <CardContent>
          <img src="src/assets/unknownbird.jpg" alt="unknownbird" />
        </CardContent>
        <div style={style.audio}>
          <Typography variant="h5" component="h5">

            *****

          </Typography>
          <AudioPlayer />
        </div>
      </Card>
    </Container>
  );
}

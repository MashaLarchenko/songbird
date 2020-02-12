/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Player from '../Player/AudioPlayer';
import Loading from '../Loading';
import '../image.css';
import '../audio.css';
import './questionBlock.css';

const useStyle = makeStyles(() => ({
  container: {
    display: 'grid',
    padding: '2% 20px',
    backgroundColor: 'rgba(48,48,48, .9)',
  },
}));

export default function QuestionBlock({ rightAnswer, isAnswerState, isAnswered, levelStart }) {
  const classes = useStyle();
  const styles = [classes.container, 'headerContainer'];
  return (
    <Container>
      <Card className={styles.join(' ')} >
          <img
            src={isAnswerState && !isAnswered ? rightAnswer.cryptImage : rightAnswer.image}
            alt="unknownbird"
            className="headerImg"
          />
          <p variant="h5" component="h5" className='questionTitle'>
            {isAnswerState && !isAnswered ? rightAnswer.cryptTitle : rightAnswer.name}
          </p>
        <div className="headerAudio">
          {!levelStart ? <Loading/> : <Player link={rightAnswer.audio} play={false} />}
        </div>
      </Card>
    </Container>
  );
}

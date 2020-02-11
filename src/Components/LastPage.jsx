import React from 'react';
import { Container, Button } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import Header from './Header';

export default function LastPage({ score, levelCount, setData, birdData, setScore, setLevel }) {
  console.log(score, 'last');
  const tryClickHandler = () => {
    setData({
      data: 'no data',
      image: 'src/assets/unknownbird.jpg',
      song: ' ',
      status: {
        noRightAnswer: true,
        isAnswered: false,
        startQ: false,
        isFinished: false,
      },
    });
    setScore({
      score: 0,
      try: 0,
    });
    setLevel(0);
  };
  return (
    <>
      <Header score={score} level={levelCount} />
      <Container>
        <Card className="congratCard">
          <h2> Поздравляю!</h2>
          <p>
            Бы набрали
            {score.score}
            из 30
          </p>
          <Button onClick={tryClickHandler}>Попробовать снова</Button>
        </Card>
      </Container>
    </>
  );
}

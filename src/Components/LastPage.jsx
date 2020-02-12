import React from 'react';
import { Container, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Header from './Header/Header';

function LastPage({ score, levelCount, setData, setScore, setLevel }) {
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
      <Container className="lastPageContainer">
        <Card className="congratCard">
          <h2> Поздравляю!</h2>
          <img
            src={
              score <= 10
                ? 'src/assets/juniorLevel.jpg'
                : score <= 20
                ? 'src/assets/midLevel.jpg'
                : 'src/assets/seniorLevel.jpg'
            }
            className="lastPageImg"
          />
          <p> Bы набрали {score.score} баллов из 30</p>
          <Button onClick={tryClickHandler} className="button">
            Попробовать снова
          </Button>
        </Card>
      </Container>
    </>
  );
}

LastPage.propTypes = {
  score: PropTypes.shape({
    score: PropTypes.number,
    try: PropTypes.number,
  }).isRequired,
  levelCount: PropTypes.number.isRequired,
  setData: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  setLevel: PropTypes.func.isRequired,
};

export default LastPage;

import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Header from './Components/Header/Header';
import QuestionBlock from './Components/QuestionBlock/QuestionBlock';
import BirdList from './Components/BirdList/BirdList';
import BirdDescription from './Components/BirdDescription/BirdDescription';
import birdState from './Components/birdState';
import LastPage from './Components/LastPage';
import Player from './Components/Player/AudioPlayer';

const style = {
  questContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '2%',
    gridColumnGap: '10px',
  },
};

export default function App() {
  const [birdData, setData] = useState({
    status: {
      noRightAnswer: true,
      isAnswered: false,
      startQ: false,
      isFinished: false,
    },
  });
  const [image, setImage] = useState('public/assets/unknownbird.jpg');
  const [data, setBirdData] = useState('');
  const [score, setScore] = useState({
    score: 0,
    try: 0,
  });
  const [rightAnswer, setRightAnswer] = useState({
    id: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
    cryptTitle: '*****',
    title: '',
    cryptImage: 'public/assets/unknownbird.jpg',
    image: '',
    audio: '',
  });
  const [levelCount, setLevel] = useState(0);
  const [loading, setLoading] = useState(false);
  const [levelStart, setStart] = useState(false);

  useEffect(() => {
    setData({
      ...birdData,
      status: {
        ...birdData.status,
        noRightAnswer: true,
        isAnswered: false,
      },
    });
    const random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    const answerBird = birdState[0][levelCount][random - 1];
    setRightAnswer({
        ...rightAnswer,
        title: answerBird.species,
      });
    Promise.all([getBirdData(answerBird.species), getBirdImage(answerBird.species)]).then(
      values => {
        const [data, imgSrc] = values;
        setRightAnswer({
          id: random,
          title: answerBird.species,
          name: `${answerBird.name}(${answerBird.species})`,
          image: `https://farm${imgSrc.farm}.staticflickr.com/${imgSrc.server}/${imgSrc.id}_${imgSrc.secret}.jpg`,
          audio: data.recordings[0].file,
          cryptTitle: '*****',
          cryptImage: 'public/assets/unknownbird.jpg',
        });
        setStart(true);
      }
    );
  }, [levelCount]);

  const getBirdData = async query => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://www.xeno-canto.org/api/2/recordings?query=${query}+q:A+len_lt:50&since=2015-01-01`;
    const resp = await fetch(proxyUrl + targetUrl);
    const data = await resp.json();
    return data;
  };

  const getBirdImage = async query => {
    const API_KEY = 'd1d5151746b40e69e612092dc0de65bf';
    const resp = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tagmode=all&extras=urlm&format=json&nojsoncallback=1&tags=${query}`
    );
    const data = await resp.json();
    return data.photos.photo[0];
  };

  const clickHandler = (species, id, e) => {
    e.preventDefault();
    const answerBird = birdState[0][levelCount][id - 1];
    setLoading(true);
    getBirdData(species).then(data => {
      setBirdData(data.recordings[0]);
      setLoading(false);
    });
    getBirdImage(species).then(photo => {
      setImage(
        `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      );
      if (rightAnswer.title === species) {
        setRightAnswer({
          ...rightAnswer,
          name: `${answerBird.name}(${answerBird.species})`,
          image: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
        });
      }
    });

    if (rightAnswer.title === species) {
      answerBird.status[1] = 'rightAnswer';
      !birdData.status.isAnswered
        ? setScore({
            score: score.score + (5 - score.try),
            try: score.try + 1,
          })
        : null;
      setData({
        ...birdData,
        status: {
          ...birdData.status,
          noRightAnswer: false,
          isAnswered: true,
          selectedBird: species,
          birdId: id,
          startQ: true,
        },
      });
    } else {
      birdData.status.isAnswered ? null : (answerBird.status[1] = 'wrongAnswer');
      setData({
        ...birdData,
        status: {
          ...birdData.status,
          noRightAnswer: true,
          selectedBird: species,
          birdId: id,
          startQ: true,
        },
      });
      setScore({
        ...score,
        try: score.try + 1,
      });
    }
  };

  const nextButtonClickHandler = () => {
    levelCount < 5
      ? (setLevel(levelCount + 1),
        setData({
          ...birdData,
          status: {
            ...birdData.status,
            startQ: false,
          },
        }))
      : levelCount === 5
      ? (setData({
          ...birdData,
          status: {
            ...birdData.status,
            isFinished: true,
            startQ: false,
          },
        }),
        birdState[0].map((level, index) => {
          level.map((item, itemI) => {
            item.status[1] = 'check-btn';
          });
        }))
      : setLevel(0);

    setScore({
      ...score,
      try: 0,
    });
  };

  return !birdData.status.isFinished ? (
    <>
      <Header score={score} level={levelCount} />
      <QuestionBlock
        rightAnswer={rightAnswer}
        isAnswerState={birdData.status.noRightAnswer}
        isAnswered={birdData.status.isAnswered}
        levelStart={levelStart}
      />
      <Container className="questContainer">
        <BirdList
          levelCount={levelCount}
          setData={setData}
          birdData={birdData}
          clickHandler={clickHandler}
        />
        <BirdDescription
          levelCount={levelCount}
          selectedBirdId={birdData.status.birdId}
          startQ={birdData.status.startQ}
          image={image}
          birdData={data}
          loading={loading}
        />
        <Button
          variant="outlined"
          className="button"
          onClick={nextButtonClickHandler}
          disabled={birdData.status.noRightAnswer && !birdData.status.isAnswered}
        >
          Next level
        </Button>
      </Container>
    </>
  ) : (
    <LastPage
      score={score}
      levelCount={levelCount}
      setData={setData}
      setScore={setScore}
      setLevel={setLevel}
    />
  );
}

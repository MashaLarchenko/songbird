import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import QuestionBlock from './Components/QuestionBlock';
import BirdList from './Components/BirdList';
import BirdDescription from './Components/BirdDescription';
// import Context from './context';
import birdState from './Components/birdState';


const style = {
  questContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '2%',
    gridColumnGap: '10px',
  },
};

const NextButton = withStyles({
  root: {
    width: '100%',
    margin: '25px 15px',
    backgroundColor: 'rgba(48,48,48, .9)',
    border: '1px solid #444',
    color: '#fff',
    cursor: 'auto',
    transition: '.3s',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default function App() {
  const [birdData, setData] = useState('no data');
  const [image, setImage] = useState('src/assets/unknownbird.jpg');
  const [score, setScore] = useState({
    score: 0,
    try: 0,
  });
  const [rightAnswer, setRightAnswer] = useState({
    id: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
    cryptTitle: '*****',
    title: 'Tetrastes bonasia',
    cryptImage: 'src/assets/unknownbird.jpg',
    image: '',
    audio: '',
  });
  const [levelCount, setLevel] = useState(0);
  const [isAnswerState, setAnswerState] = useState({
    noRightAnswer: true,
    isAnswered: false,
    startQ: false,
    color: 'check-btn',
  });
  // const [classes, setClasses] = useState(['check-dot']);

  const getBirdData = async (query) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://www.xeno-canto.org/api/2/recordings?query=${query}`;
    const resp = await fetch(proxyUrl + targetUrl);
    const data = await resp.json();
    return data;
  };

  const getBirdImage = async (query) => {
    const resp = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d1d5151746b40e69e612092dc0de65bf&tagmode=all&extras=urlm&format=json&nojsoncallback=1&tags=${query}`);
    const data = await resp.json();
    return data.photos.photo[0];
  };

  const clickHandler = (species, id) => {
    Promise.all([getBirdData(species), getBirdImage(species)])
      .then((values) => {
        const [data, photo] = values;
        setImage(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
        setData(data.recordings[0]);
        if (rightAnswer.title === species) {
          setAnswerState({
            noRightAnswer: false,
            startQ: true,
            selectedBird: species,
            birdId: id,
            color: 'rightAnswer',
          });
          setRightAnswer({
            ...rightAnswer,
            audio: data.recordings[0].file,
            image: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
          });
          setScore({
            score: 5 - score.try,
            try: score.try + 1,
          });
        } else {
          setAnswerState({
            noRightAnswer: true,
            isAnswered: true,
            startQ: true,
            selectedBird: species,
            birdId: id,
            color: 'wrongAnswer',
          });
          setScore({
            ...score,
            try: score.try + 1,
          });
        }
      });
  };
  // useEffect(() => {
  //   if (isAnswerState.noRightAnswer && isAnswerState.startQ) {
  //     setClasses('wrongAnswer');
  //     console.log(classes);
  //   } else if (!isAnswerState.noRightAnswer && isAnswerState.startQ) {
  //     setClasses('rightAnswer');
  //     console.log(classes);
  //   }
  // }, [isAnswerState]);


  useEffect(() => {
    const random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    const answerBird = birdState[0][levelCount][random - 1];
    Promise.all([getBirdData(answerBird.species), getBirdImage(answerBird.species)])
      .then((values) => {
        const [data, imgSrc] = values;
        setRightAnswer({
          id: random,
          title: answerBird.species,
          image: `https://farm${imgSrc.farm}.staticflickr.com/${imgSrc.server}/${imgSrc.id}_${imgSrc.secret}.jpg`,
          audio: data.recordings[0].file,
          cryptTitle: '*****',
          cryptImage: 'src/assets/unknownbird.jpg',
        });
      });
  }, [levelCount]);

  return (
    <>
      <Header score={score} />
      <QuestionBlock
        rightAnswer={rightAnswer}
        isAnswerState={isAnswerState.noRightAnswer}
      />
      <Container style={style.questContainer}>
        <BirdList
          levelCount={levelCount}
          setData={setData}
          setImage={setImage}
          setAnswerState={setAnswerState}
          isAnswerState={isAnswerState}
          clickHandler={clickHandler}
          // classes={classes}
        />
        <BirdDescription
          levelCount={levelCount}
          selectedBirdId={isAnswerState.birdId}
          startQ={isAnswerState.startQ}
          image={image}
          birdData={birdData}
        />
      </Container>
      <NextButton
        variant="outlined"
        onClick={() => {
          setLevel(levelCount + 1); setScore({
            ...score,
            try: 0,
          });
        }}
        disabled={isAnswerState.noRightAnswer}
      >
        Next level
      </NextButton>
    </ >
  );
}

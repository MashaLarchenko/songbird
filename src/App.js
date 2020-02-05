import React from 'react';
import { Container } from '@material-ui/core';
import Header from './Components/Header';
import QuestionBlock from './Components/QuestionBlock';
import BirdList from './Components/BirdList';
import BirdDescription from './Components/BirdDescription';

const style = {
  questContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '2%',
  },
};

export default () => (
  <>
    <Header />
    <QuestionBlock />
    <Container style={style.questContainer}>
      <BirdList />
      <BirdDescription />
    </Container>
  </>
);

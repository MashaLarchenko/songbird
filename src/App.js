import React from 'react';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
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

const NextButton = withStyles({
  root: {
    width: '100%',
    margin: '25px 15px',
    backgroundColor: '#303030',
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

export default () => (
  <>
    <Header />
    <QuestionBlock />
    <Container style={style.questContainer}>
      <BirdList />
      <BirdDescription />
    </Container>
    <NextButton variant="outlined" disabled>Next level</NextButton>
  </>
);

import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Category from './Category';

function Header({ score, level }) {
  const style = {
    section: {
      color: 'red',
    },
    container: {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  };

  return (
    <Container style={style.container} >
      <header>
        <nav className="top-header">
          <img src="src/assets/logo.svg" alt="logo" className="header-logo" />
          <p className="totalScore">
            Score:
            <span className="score_number">{score.score}</span>
          </p>
        </nav>
        <Category style={style.section} level={level} />
      </header>
    </Container>
  );
}

Header.propTypes = {
  score: PropTypes.shape({
    score: PropTypes.number,
    try: PropTypes.number,
  }).isRequired,
};

export default Header;

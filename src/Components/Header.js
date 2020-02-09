import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';


function Header({ score }) {
  const style = {
    section: {
      color: 'red',
    },
    container: {
      marginBottom: '2%',
    },
  };

  return (
    <Container style={style.container}>
      <header>
        <nav className="top-header">
          <img src="src/assets/logo.svg" alt="logo" className="header-logo" />
          <p className="total_score">
            Score:
            <span className="score_number">
              {score.score}
            </span>
          </p>
        </nav>
        <section style={style.section}>
          <ul className="bird-family-container">
            <li className="bird-family-item traning active-item">Разминка</li>
            <li className="bird-family-item insectivores">Насекомоядные птицы</li>
            <li className="bird-family-item predatory">Хищные птицы</li>
            <li className="bird-family-item song">Певчие птицы</li>
            <li className="bird-family-item forest">Лесные птицы</li>
            <li className="bird-family-item coastal">Прибрежные птицы</li>
          </ul>
        </section>
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

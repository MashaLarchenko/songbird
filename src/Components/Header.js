import React from 'react';
import { Container } from '@material-ui/core';


export default function Header() {
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
            <span className="score_number">0 </span>
          </p>
        </nav>
        <section style={style.section}>
          <ul className="bird-family-container">
            <li className="bird-family-item active-item">Разминка</li>
            <li className="bird-family-item">Воробьиные</li>
            <li className="bird-family-item">Лесные птицы</li>
            <li className="bird-family-item">Певчие птицы</li>
            <li className="bird-family-item">Хищные птицы</li>
            <li className="bird-family-item">Морские птицы</li>
          </ul>
        </section>
      </header>
    </Container>

  );
}

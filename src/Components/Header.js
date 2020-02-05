import React from 'react';

export default function Header() {
  // constructor() {
  //   super();
  //   this.state = {
  //     score: 0,
  //   };
  // }


  return (
    <header>
      <nav className="top-header">
        <img src="src/assets/logo.svg" alt="logo" className="header-logo" />
        <p className="total_score">
          Score:
          <span className="score_number">0 </span>
        </p>
      </nav>

    </header>
  );
}

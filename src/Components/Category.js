import React from 'react';

const style = {
  section: {
    color: 'red',
  },
};

export default function Category() {
  return (
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

  );
}

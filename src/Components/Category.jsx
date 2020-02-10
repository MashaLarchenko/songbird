import React from 'react';

const style = {
  section: {
    color: 'red',
  },
};

export default function Category({ level }) {
  const questionCategory = [
    'Разминка',
    'Насекомоядные птицы',
    'Хищные птицы',
    'Луговые птицы',
    'Лесные птицы',
    'Водно-болотные птицы',
  ];

  return (
    <section>
      <ul className="bird-family-container">
        {questionCategory.map((item, index) => {
            console.log(level, index);
          if (index === level) {
              return <li className="bird-family-item traning active-item">{item}</li>;
          } else {
            return <li className="bird-family-item traning">{item}</li>;
          }
        })}

        {/* <li className="bird-family-item traning active-item ">Разминка</li>
        <li className="bird-family-item insectivores">Насекомоядные птицы</li>
        <li className="bird-family-item predatory">Хищные птицы</li>
        <li className="bird-family-item song">Луговые птицы</li>
        <li className="bird-family-item forest">Лесные птицы</li>
        <li className="bird-family-item coastal">Водно-болотные птицы</li> */}
      </ul>
    </section>
  );
}

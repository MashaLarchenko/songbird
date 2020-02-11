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
            return <li className={index === level? "bird-family-item active-item" : "bird-family-item"} key={index}>{item}</li>;
        })}
      </ul>
    </section>
  );
}

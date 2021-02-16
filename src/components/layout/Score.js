import React from 'react';
import '../styles/Score.scss';

const Score = ({score}) => {
  return (
    <>
      <section className="score-section">
        <div className="score__container">
          <ul className="gameName">
            <li className="nameElement">ROCK</li>
            <li className="nameElement">PAPER</li>
            <li className="nameElement">SCISSORS</li>
          </ul>
          <div className="score">
            <p className="score__header">SCORE</p>
            <span className="score__counter">{score}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Score;

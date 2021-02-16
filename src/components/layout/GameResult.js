import React from 'react';
import { Link } from 'react-router-dom';
import rock from '../../assets/rock1.svg';
import scissors from '../../assets/scissors1.svg';
import paper from '../../assets/paper1.svg';
import '../styles/Result.scss';

const GameResult = ({ choice, enemyChoice, result }) => {
  console.log('lubie placki');
  return (
    <div className="result-container">
      <div className="choices">
        {choice === 'rock' && <img src={rock} alt="" />}
        {choice === 'scissors' && <img src={scissors} alt="" />}
        {choice === 'paper' && <img src={paper} alt="" />}

        {enemyChoice === 'rock' && <img src={rock} alt="" />}
        {enemyChoice === 'scissors' && <img src={scissors} alt="" />}
        {enemyChoice === 'paper' && <img src={paper} alt="" />}
      </div>

      {result === 'win' && 'You win :)'}
      {result === 'draw' && 'draw :/'}
      {result === 'lose' && 'You lose :('}

      <Link to="/">
        <button className="btn btn-primary">PLAY AGAIN</button>
      </Link>
    </div>
  );
};

export default GameResult;

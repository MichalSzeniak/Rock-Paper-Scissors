import React from 'react';
import rock from '../../assets/rock.svg';
import paper from '../../assets/paper.svg';
import scissors from '../../assets/scissors.svg';
import '../styles/Game.scss';
import { Link } from 'react-router-dom';

const Game = ({ score, setScore, setChoice, botChoice, Effect }) => {
  const handlePaper = () => {
    setChoice('paper');
    botChoice();
  };

  const handleScissors = () => {
    setChoice('scissors');
    botChoice();
  };

  const handleRock = () => {
    setChoice('rock');
    botChoice();
  };

  return (
    <>
      <div className="buttons-container">
        <div className="top-buttons">
          <Link to="/result">
            <button onClick={handlePaper} className="paper">
              <img className="icon" src={paper} alt="" />
            </button>
          </Link>
          <Link to="/result">
            <button onClick={handleScissors} className="scissors">
              <img className="icon" src={scissors} alt="" />
            </button>
          </Link>
        </div>
        <Link to="/result">
          <button onClick={handleRock} className="rock">
            <img className="icon" src={rock} alt="" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Game;

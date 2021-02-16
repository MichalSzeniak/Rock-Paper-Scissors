import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import Score from './Score';
import Game from './Game';
import GameResult from './GameResult';
import ErrorPage from './ErrorPage';
import Group from '../../assets/Group.svg';

function App() {
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState('');
  const [enemyChoice, setEnemyChoice] = useState('');
  const [result, setResult] = useState('');

  const array = ['paper', 'scissors', 'rock'];

  const botChoice = () => {
    setEnemyChoice(array[Math.floor(Math.random() * 3)]);
  };

  const Effect = () => {
    if (choice == enemyChoice) {
      setResult('draw');
      setScore(score + 0);
    } else if (choice == 'paper' && enemyChoice == 'rock') {
      setScore(score + 1);
      setResult('win');
    } else if (choice == 'paper' && enemyChoice == 'scissors') {
      setScore(score - 1);
      setResult('lose');
    } else if (choice == 'rock' && enemyChoice == 'scissors') {
      setScore(score + 1);
      setResult('win');
    } else if (choice == 'rock' && enemyChoice == 'paper') {
      setScore(score - 1);
      setResult('lose');
    } else if (choice == 'scissors' && enemyChoice == 'paper') {
      setScore(score + 1);
      setResult('win');
    } else if (choice == 'scissors' && enemyChoice == 'rock') {
      setScore(score - 1);
      setResult('lose');
    }
  };

  useEffect(() => {
    Effect();
  }, [enemyChoice]);

  return (
    <Router basename="/">
      <img className="background-img" src={Group} alt=""/>
      <div className="App">
        <main className="container-sm">
          <Score score={score} />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Game
                  setScore={setScore}
                  score={score}
                  setChoice={setChoice}
                  botChoice={botChoice}
                  Effect={Effect}
                />
              )}
            />
            <Route path="/result" render={() => <GameResult choice={choice} enemyChoice={enemyChoice} result={result}/>} />
            <Route component={ErrorPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

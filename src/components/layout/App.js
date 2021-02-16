import React, {useState} from 'react';
import '../styles/App.scss';
import Score from './Score';
import Game from './Game';



function App() {

  const [score, setScore] = useState(0);  

  return (
    <div className="App">
      <main className="container-sm">
        <Score score={score}/>
        <Game setScore={setScore} score={score}/>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import rock from '../../assets/rock.svg';
import paper from '../../assets/paper.svg';
import scissors from '../../assets/scissors.svg';
import '../styles/Game.scss';



const Game = ({score, setScore}) => {
    const handleClick = () => {
        setScore(score + 1)
    }
    
    return (
        <>
        <div className="buttons-container">
            <div className="top-buttons">
                <button onClick={handleClick} className="paper"><img className="icon" src={paper} alt=""/></button>
                <button onClick={handleClick} className="scissors"><img src={scissors} alt=""/></button>
            </div>
            <button onClick={handleClick} className="rock"><img src={rock} alt=""/></button>
        </div>
        </>
    )
}

export default Game

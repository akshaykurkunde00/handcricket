import React, { useState, useEffect, useRef } from 'react';
import out from '../assets/out.mp3';
import hit from '../assets/hit.mp3';




function Practise() {
  const [userChoice, setUserChoice] = useState(0);
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(0);
  const [computerChoice, setComputerChoice] = useState(null);

  const hitSound = useRef(null);
  const outSound = useRef(null);

  useEffect(() => {
    
    setTarget(Math.floor(Math.random() * 91) + 10);
  }, []);

  const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    setComputerChoice(randomNumber);

    if (userChoice === randomNumber) {
      outSound.current.play();
      alert('Out! You Lose.');
      resetGame();
    } else {
      hitSound.current.play();
      setScore((prevScore) => {
        const newScore = prevScore + userChoice;
        if (newScore >= target) {
          alert('Congratulations! You Win!');
          resetGame();
        }
        return newScore;
      });
    }
  };

  const handleButtonClick = (click) => {
    setUserChoice(click);
    generateComputerChoice();
  };

  const resetGame = () => {
    setScore(0);
    setTarget(Math.floor(Math.random() * 100) + 10);
    setUserChoice(0);
    setComputerChoice(null);
  };

  return (
    <>
      <div className="container">
        <p>You have a target of {target} runs</p>
        <h1>{score} Runs</h1>
        <button onClick={() => handleButtonClick(1)}>1</button>
        <button onClick={() => handleButtonClick(2)}>2</button>
        <button onClick={() => handleButtonClick(3)}>3</button>
        <button onClick={() => handleButtonClick(4)}>4</button>
        <button onClick={() => handleButtonClick(5)}>5</button>
      </div>
      <div>
        <audio ref={hitSound} src={hit}></audio>
        <audio ref={outSound} src={out}></audio>
      </div>
    </>
  );
}

export default Practise;

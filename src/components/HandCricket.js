import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";

function HandCricket() {
  const location = useLocation();
  const initialChoice = location.state?.choose || "Bat";
  const [choice, setChoice] = useState(initialChoice);
  const [target, setTarget] = useState(0);
  const [inning, setInning] = useState(1);
  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [userChoice, setUserChoice] = useState(0);
  const [score, setScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState(null);

  const closePopup = () => setPopup(false);

  const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    setComputerChoice(randomNumber);

    if (userChoice === randomNumber) {
      alert("Out");
      setTarget(score);

      if (inning === 2 && target !== null) {
        if (score >= target) {
          setPopupMessage("You Win!");
        } else {
          setPopupMessage("You Lose!");
        }
        setPopup(true);
      } else if (inning === 1) {
        setPopupMessage(`You have set a target of ${score} runs`);
        setPopup(true);
      }

      setScore(0);
      setChoice(choice === "Bat" ? "Ball" : "Bat");
      setInning(2);
    } else {
      setScore((prevScore) => prevScore + (choice === "Bat" ? userChoice : randomNumber));
      if (inning === 2 && target !== null && score >= target) {
        setPopupMessage("You Win!");
        setPopup(true);
      }
    }
  };

  const handleButtonClick = (click) => {
    setUserChoice(click);
    generateComputerChoice();
  };

  return (
    <div className="container">
      <div className="result">
      <h2>{choice === "Bat" ? "Batting" : "Bowling"}</h2>
      <p>Score: {score}</p>
      <p>Target: {target}</p>
      {[...Array(6).keys()].map((num) => (
        <button key={num} onClick={() => handleButtonClick(num)}>
          {num}
        </button>
      ))}
      </div>

      {popup && (
        <Popup open={true} onClose={closePopup}>
          <div>
            <h1>{popupMessage}</h1>
            {inning === 1 ? (
              <button onClick={closePopup}>Next</button>
            ) : (
              <Link to="/">
                <button onClick={closePopup}>Home</button>
              </Link>
            )}
          </div>
        </Popup>
      )}
    </div>
  );
}

export default HandCricket;

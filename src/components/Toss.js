import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';

function Toss() {
  const [result, setResult] = useState(null);
  const [userChoice, setUserChoice] = useState('');
  const [tossWinner, setTossWinner] = useState('');
  const [randomChoice, setRandomChoice] = useState('');
  const [name,setName]=useState('akshay');

  const handleToss = (choice) => {
    setUserChoice(choice);

    const outcomes = ['Heads', 'Tails'];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    setResult(randomOutcome);

    if (randomOutcome === choice) {
      setTossWinner('user');
    } else {
      setTossWinner('computer');
      handleComputerChoice();
    }
  };

  const handleComputerChoice = () => {
    const chooseOutcome = ['Bat', 'Ball'];
    const randomOutcome = chooseOutcome[Math.floor(Math.random() * chooseOutcome.length)];
    setRandomChoice(randomOutcome);
  };

  const closeModal = () => {
    setTossWinner('');
  };

  return (
    <>
      <div className='container'>
        <div className='result'>
         <h1>choose</h1>
          <button onClick={() => handleToss('Heads')}>Heads</button>
          <button onClick={() => handleToss('Tails')}>Tails</button>
        </div>

        

        {tossWinner === 'user' && (
          
          <Popup open={true} onClose={closeModal}  className='popup-overlay'>

            <div >
            <p>You win the toss</p>  
              <Link to='/play' state={{ choose: 'Bat' }}> <button>Bat</button></Link>
              <Link to='/play' state={{ choose: 'Ball' }}> <button>Ball</button></Link>
            </div>
          </Popup>
        )}

        {tossWinner === 'computer' && (
          <Popup open={true} onClose={closeModal}>
            <div>
              <p>You lose the toss</p>  
              <h1>You will: {randomChoice}</h1>
              <Link to='/play' state={{ choose: randomChoice }}> <button>Proceed</button></Link>
            </div>
          </Popup>
        )}
      </div>
    </>
  );
}






export default Toss;

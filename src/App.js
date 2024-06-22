import logo from './logo.svg';
import './App.css';
import Handcricket from './components/HandCricket.js'
import Toss from './components/Toss.js';
import { Route,  BrowserRouter, Routes } from 'react-router-dom';
import Bat from './components/Bat.js';
import Ball from './components/Ball.js';
import Practise from './components/Practise.js';
import Home from './components/Home.js';



function App() {
  return (
    <>
 
 <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />}/>
    <Route path='/toss' element={<Toss />}/>
    <Route path='/play' element={<Handcricket />}/>
    <Route path='/batting' element={<Bat />}/>
    <Route path='/balling' element={ <Ball /> }/>
    <Route path='/practise' element={ <Practise /> }/>
    
  </Routes>
 </BrowserRouter>




    </>
  );
}

export default App;

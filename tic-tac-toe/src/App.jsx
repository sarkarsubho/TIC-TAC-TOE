// import logo from './logo.svg';
import './App.css';
import  { SqureComponent } from './cpmponents/SqureComponent';
import { useEffect, useState } from 'react';

const initialstate=["","","","","","","","",""];

function App() {
  const [gamestate,setgameState]=useState(initialstate);
  const [isxchance,setXchance]=useState(false);

  const changegamestate=(index)=>{
    let strings=Array.from(gamestate);
    strings[index]=isxchance ? "X" :"0";

    setgameState(strings);
    setXchance(!isxchance);
  }

  useEffect(()=>{
   const winner=cheakWinner();
   if(winner){
     alert(`winner ${winner}`);
      setgameState(initialstate);
   }
  
  },[gamestate])

  const cheakWinner=()=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gamestate[a] && gamestate[a] === gamestate[b] && gamestate[a] === gamestate[c]) {
        return gamestate[a];
      }
    }
    return null;
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <h2>React TIC-TAC-TOE</h2>
       <div style={{display:"flex"}}><h3 >{isxchance ? "Next player: X" : "Next player: 0" }</h3>
       
       <button className='resetbutton' onClick={()=>setXchance(!isxchance)}>change Next Player</button></div>
       
       <div className='div'>
        <SqureComponent className="bottom-right-border" state={gamestate[0]} onClick={()=>{changegamestate(0)}}></SqureComponent>
        <SqureComponent state={gamestate[1]} className="bottom-right-border"  onClick={()=>{changegamestate(1)}}></SqureComponent>
        <SqureComponent className="bottom-border" state={gamestate[2]}  onClick={()=>{changegamestate(2)}}></SqureComponent>
       </div>
       <div  className='div'>
       <SqureComponent className="bottom-right-border" state={gamestate[3]}  onClick={()=>{changegamestate(3)}} ></SqureComponent>
       <SqureComponent className="bottom-right-border" state={gamestate[4]}  onClick={()=>{changegamestate(4)}}></SqureComponent>
       <SqureComponent className="bottom-border" state={gamestate[5]}  onClick={()=>{changegamestate(5)}}></SqureComponent>
       </div>
       <div  className='div'>
       <SqureComponent className="right-border" state={gamestate[6]}  onClick={()=>{changegamestate(6)}}></SqureComponent>
       <SqureComponent className="right-border" state={gamestate[7]}  onClick={()=>{changegamestate(7)}}></SqureComponent>
       <SqureComponent state={gamestate[8]}  onClick={()=>{changegamestate(8)}}></SqureComponent>
       </div><hr style={{width:"350px"}}></hr>
       <button className='resetbutton' onClick={()=>setgameState(initialstate)}>Reset</button>
      </header>
     
    </div>
  );
}

export default App;

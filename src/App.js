import React from 'react';
// import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement} from './actions'
import './App.css';

function App() {
  const counter=useSelector(state=>state.counter);
  const isLogged=useSelector(state=>state.isLogged);
  const dispatch=useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      {isLogged ?"Valuabel information which i shoudn't see":" "}
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(5))}>-</button>

    </div>
  );
}

export default App;

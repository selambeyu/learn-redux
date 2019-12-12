import React from 'react';
// import logo from './logo.svg';
import {useSelector} from 'react-redux'
// import {increment,decrement} from './actions'
import './App.css';

function App() {
  const counter=useSelector(state=>state.counter);
  // const isLogged=useSelector(state=>state.isLogged);
  // const dispatch=useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

    </div>
  );
}

export default App;

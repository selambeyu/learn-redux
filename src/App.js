import React from 'react';
// import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {increment,decrement} from './actions'
import Nav from './nav'
import About from './about'
import Shop from './shop'
import Functionalcom from './component/functionalcom'
import Classcom from './component/classcom'
import './App.css';

function App() {
  const counter=useSelector(state=>state.counter);
  const isLogged=useSelector(state=>state.isLogged);
  const dispatch=useDispatch();

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/about" component={About}></Route>
      <h1>Counter {counter}</h1>
      {isLogged ?"Valuabel information which i shoudn't see":" "}
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(5))}>-</button>
      <Classcom></Classcom>
      <Functionalcom></Functionalcom>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Ammo from './Components/Ammo';
import Armor from './Components/Armor';
import Guns from './Components/Guns';
import Gun from './Components/Gun';
import Maps from './Components/Maps';
import * as serviceWorker from './serviceWorker'

function App() {
  return (
    <Router>
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/ammo' component={Ammo}/>
        <Route exact path='/armor' component={Armor}/>
        <Route exact path='/guns' component={Guns}/>
        <Route exact path='/maps' component={Maps}/>
        <Route exact path='/guns/:gunName' component={Gun}/>
        </Router>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.unregister() 
import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import Scooter from "../../components/Scooter/Scooter"
import NavBar from "../../components/NavBar/NavBar"
import userService from '../../utils/userService';
// import 'bootstrap/dist/css/bootstrap.min.css'

// const Test = [ "Daniel" ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      // test: Test,
    };
  }
  render() {
    return (
      <div>
        <NavBar/>
        <header>
          <h1>Tres-Commas</h1>
        </header>
        <div>
        <Scooter/>

        <Switch>
          <Route exact path='/' render={() => <HomePage test={this.state.test} />} />
          <Route exact path='/api/signup' render={() => <SignupPage />} />
          <Route exact path='/api/login' render={() => <LoginPage />} />
        </Switch>
        </div>
        <footer>FOOTER CONTENT HERE</footer>
      </div>
    );
  }
}

export default App;

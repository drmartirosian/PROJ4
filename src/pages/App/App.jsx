import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Scooter from "../../components/Scooter/Scooter"
import NavBar from "../../components/NavBar/NavBar"
import HomePage from '../HomePage/HomePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }


  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div>
        <NavBar/>
        <header><h1>Tres-Commas</h1></header>
        <Scooter/>
        <Switch>
          <Route exact path='/' render={() => <HomePage test={this.state.test} />} />
          <Route exact path='/api/signup' render={() => <SignupPage />} />
          <Route exact path='/api/login' render={() => <LoginPage />} />
        </Switch>
        <footer>FOOTER CONTENT HERE</footer>
      </div>
    );
  }
}

export default App;

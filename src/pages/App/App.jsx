import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Scooter from "../../components/Scooter/Scooter"
// import 'bootstrap/dist/css/bootstrap.min.css'

const Test = [ "Daniel" ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: String
    };
  }
  render() {
    return (
      <div>
        <nav>
          {/* <th>Home</th>
          <th>About</th>
          <th>LOGIN/OUT</th> */}
        </nav>
        <header>
          <h1>Tres-Commas</h1>
        </header>
        <div>
        <Scooter/>
        <Switch>
          <Route exact path='/' render={() =>
          <HomePage test={this.state.test} />
          } />
        </Switch>
        </div>
        <footer>FOOTER CONTENT HERE</footer>
      </div>
    );
  }
}

export default App;

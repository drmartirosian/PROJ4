import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Scooter from "../../components/Scooter/Scooter"


const Test = [ "Daniel" ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: Test
    };
  }
  render() {
    return (
      <div>
        <nav>
          <th>Home</th>
          <th>About</th>
          <th>LOGIN/OUT</th>
        </nav>
        <header>Header</header>
        <Scooter/>
        <Switch>
          <Route exact path='/' render={() =>
            <HomePage test={this.state.test} />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;

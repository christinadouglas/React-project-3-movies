import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn} />} />
      </Switch>
    </div>
  );
}

export default App;

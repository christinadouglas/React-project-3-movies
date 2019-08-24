import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import Profile from './ProfilePage'
import MovieContainer from './MovieContainer'

const My404 = () =>{
  return (
    <div>
      You are lost
    </div>
    )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn} />} />
        <Route exact path="/profile" render={(props) =>  <Profile {...props} userInfo={this.state}/> } />
        <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
        <Route exact path='/movies' component={ MovieContainer } />
        <Route component={My404} />
      </Switch>
    </div>
  );
}


export default App;

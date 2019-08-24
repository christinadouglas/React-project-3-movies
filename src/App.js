import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'

const My404 = () =>{
  return (
    <div>
      You are lost
    </div>
    )
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      email: '',
      image: '',
      loading: true,
    }
  }
  logIn = async (loginInfo) => {
    try {

      const loginResponse = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();


      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })

      return parsedResponse

    } catch (err) {
      console.log(err)
    }
  }
  render() {

  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn} />} />
      </Switch>
    </div>
  );
}
}

export default App;

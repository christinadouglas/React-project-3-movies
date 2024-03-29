import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import Profile from './ProfilePage'
import MovieContainer from './MovieContainer'
import './App.css'

console.log(process.env)

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

      const loginResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json', 
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
  register = async (data) => {
    console.log(data)
     try {
      const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json();

      console.log(parsedResponse)

      this.setState({
        ...parsedResponse.data,
        loading: false
      })
      return parsedResponse;

    } catch (err) {
      console.log(err)
    }
  }
  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn} />} />
        <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
        <Route exact path="/profile" render={(props) =>  <Profile {...props} userInfo={this.state}/> } />
        <Route exact path='/movies'  render={(props) =>  <MovieContainer {...props} movies={this.state} /> } /> 
        <Route component={My404} />
      </Switch>
    </div>
  );
  }
}


export default App;

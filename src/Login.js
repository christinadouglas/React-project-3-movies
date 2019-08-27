import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Headers from './Header'

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const login = this.props.logIn(this.state);

    login.then((data) => {
      if(data.status.message === 'Success'){
        this.props.history.push('/profile')
      } else {
        console.log(data, this.props)
      }
    }).catch((err) => {
      console.log(err)
    })

  }
  render(){
    return (
      <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
        <Grid.Column style={{maxWidth: 450}}>
          <Headers as='h2' textAlign='center'>
            Login
          </Headers>
          <h2>Login</h2>
          <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
              Username:
              <Form.Input fluid icon='mail' iconPosition='left' placeholder='Username' type='text' name='username' onChange={this.handleChange}/>
              Password:
              <Form.Input fluid icon='lock' iconPosition='left' type='password' placeholder='Password' name='password' onChange={this.handleChange}/>
              <Button fluid size='large' type='sumbit'>Login</Button>
              <Message>
                Not a member? <Link to='/register'>Register</Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      )
  }
}

export default Login;

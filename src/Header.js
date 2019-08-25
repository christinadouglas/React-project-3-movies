import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const Headers = () => {

  return (
    <header>
      <h1>MovieStop</h1>
      <i class="instagram icon"></i> 
      <i class="facebook icon"></i> 
      <i class="twitter icon"></i>
      <i class="youtube icon"></i>
      <Menu color='black' inverted>
        <Menu.Item>
        <Link to="/movies">Movies</Link>
        </Menu.Item>
        <Menu.Item>
        <Menu.Item>
        <Link to="/profile">Profile </Link>
        </Menu.Item>
        <Link to="/register">Register</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/">Login </Link>
        </Menu.Item>
      </Menu>
    </header>
    )
}

export default Headers;
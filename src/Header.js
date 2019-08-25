import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const Headers = () => {

  return (
    <header>
      <Menu color='black' inverted>
        <Menu.Item>
        <Link to="/">Login </Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/profile">Profile </Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/movies">Movies</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/register">Register</Link>
        </Menu.Item>
      </Menu>
    </header>
    )
}

export default Headers;
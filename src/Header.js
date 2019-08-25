import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {

  return (
    <header>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/movies">Movies</Link></li>
      </ul>
    </header>
    )
}

export default Headers;
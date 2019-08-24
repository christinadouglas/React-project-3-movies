import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {

  return (
    <header>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </header>
    )
}

export default Headers;
import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {

  return (
    <header>
        <Link to="/">Login </Link>
        <Link to="/profile">Profile </Link>
        <Link to="/movies">Movies</Link>
    </header>
    )
}

export default Headers;
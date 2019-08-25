import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {

    return (
      <header>
          <div class="ui secondary pointing menu">
  <a class="/">
    Home
  </a>
  <a class="item">
    Messages
  </a>
  <a class="item">
    Friends
  </a>
  <div class="right menu">
    <a class="ui item">
      Logout
    </a>
  </div>
</div>
<div class="ui segment">
  <p></p>
</div>
      </header>
      )
  }
  
  export default Headers;
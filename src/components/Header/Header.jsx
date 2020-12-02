import React from 'react';
import logo_img from '../../static/img/Logo.svg';
import './Header.scss';

const Header = () => (
  <div className="header">
    <img src={logo_img} alt="img"/>
    <h3>+38 (098) 494 62 68</h3>
  </div>
);

export default Header;
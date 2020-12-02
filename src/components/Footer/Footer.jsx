import React from 'react';
import logo_img from '../../static/img/Logo.svg';
import './Footer.scss';

const Footer = () => (
  <>
    <div className="footer">
      <div>
        <img src={logo_img} alt="logo"/>
      </div>
      <div>
        <h1>Контакты</h1>
        <div>
          <div style={{ marginRight: '2rem' }}>
            <p>16A Grecheskaya street</p>
            <p>Odessa,Ukraine</p>
          </div>
          <div>
            <p>hookahshop@gmail.com</p>
            <p>+38(098)414 62 68</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Соц сети</h1>
        <div>
          <div className="networks">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>
    <p style={{ paddingLeft: '8.8rem', paddingBottom: '2rem' }}>@2020 Hookah Shop</p>
  </>
);

export default Footer;
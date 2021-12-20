import React from 'react';
import { useTranslation } from 'react-i18next';
import { hookahStore } from '../../static/Content';
import logo_img from '../../static/img/Logo.svg';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();

  const renderImageBrand = () => (
    <div>
      <img src={logo_img} alt="logo"/>
    </div>
  );

  const renderContacts = () => (
    <div>
      <h1>{t('contacts.titleContacts')}</h1>
      <div>
        <div style={{ marginRight: '2rem' }}>
          <p>{t('contacts.street')}</p>
          <p>{t('contacts.city')}</p>
        </div>
        <div>
          <p>hookahshop@gmail.com</p>
          <p>+38(098)414 62 68</p>
        </div>
      </div>
    </div>
  );

  const renderContactsNetwork = () => (
    <div>
      <h1>{t('contacts.titleNet')}</h1>
      <div>
        <div className="networks">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer>
        {renderImageBrand()}
        {renderContacts()}
        {renderContactsNetwork()}
      </footer>
      <p style={{ textAlign: 'center', paddingBottom: '2rem' }}>@2020 {hookahStore}</p>
    </>
);
}

export default Footer;
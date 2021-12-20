import React from 'react';
import './Information.scss';
import logo_img from '../../../static/img/Logo.svg';
import { useTranslation } from 'react-i18next';

const Information = ({ refScroll }) => {
  const { t } = useTranslation();
  return (
    <div ref={refScroll} className="information">
      <img src={logo_img} alt="logo"/>
      <h1>{t('information.title')}</h1>
      <p>{t('information.description')}</p>
    </div>
  );
}

export default Information;

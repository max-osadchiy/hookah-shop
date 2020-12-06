import React from 'react';
import './Banner.scss';

const Banner = ({ ScrollToInfo }) => (
  <div className="banner">
    <h1>У нас есть все!</h1>
    <h1>И даже больше...</h1>
    <button onClick={() => ScrollToInfo()}>Подробнее</button>
  </div>
);

export default Banner;

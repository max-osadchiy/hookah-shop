import React from 'react';
import './Information.scss';
import logo_img from '../../static/img/Logo.svg';

const Information = () => (
  <div className="information">
    <img src={logo_img} alt="logo"/>
    <h1>Кто мы?</h1>
    <p>Купить кальян в Одессе — магазин кальянов “Hookah”. Наш подобранный ассортимент товаров оценят, как любители покурить кальян в домашней атмосфере, так и профессиональные кальянщики. Товар представленный в магазине порадует даже самых искушённых покупателей и постоянно расширяется</p>
  </div>
);

export default Information;

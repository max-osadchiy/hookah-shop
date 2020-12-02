import React from 'react';
import { filters } from '../../static/Content';
import './Filter.scss';
import arrow_down from '../../static/img/ArrowDown.svg';

const Filter = () => (
  <div className="filter">
    <h3>Категории товаров</h3>
    {filters.map((filter, id) => (
      <div className="filter-item" key={id}>
        <p>{filter.title}</p>
        <img src={arrow_down} alt=""/>
      </div>
      )
    )}
  </div>
);

export default Filter;
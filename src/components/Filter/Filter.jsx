import React, { useState } from 'react';
import { filters } from '../../static/Content';
import './Filter.scss';

const Filter = ({ filter, setFilter }) => {
  const [open, setOpen] = useState(0);
  const onChangeFilter = (id, title) => {
    setOpen(id);
    setFilter(title);
  };

  return (
    <div className="filter">
      <h3>Категории товаров</h3>
      {filters.map((filter, id) => (
        <div key={id}>
          <div
            onClick={() => onChangeFilter(id, filter.title)}
            className="filter-item"
          >
            <p className={open === id ? 'text-focus' : ''}>{filter.title}</p>
          </div>
        </div>
        )
      )}
    </div>
  );
}

export default Filter;
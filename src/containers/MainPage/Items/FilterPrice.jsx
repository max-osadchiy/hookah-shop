import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useStore } from '../../../store/storeHOC';
import './FilterPrice.scss';

const FilterPrice = ({ filter, setFilter }) => {
  const {mainStore} = useStore();
  const [open, setOpen] = useState(0);

  const filters = [
    {
      title: 'От большой к меньшей цене',
      action: () => {
        if (mainStore.sortItems === 'От большой к меньшей цене') {
          mainStore.changeSortItems('')
        } else {
          mainStore.changeSortItems('От большой к меньшей цене');
        }
      },
    },
    {
      title: 'От меньшей к большой цене',
      action: () => {
        if (mainStore.sortItems === 'От меньшей к большой цене') {
          mainStore.changeSortItems('')
        } else {
          mainStore.changeSortItems('От меньшей к большой цене');
        }
      },
    },
  ]

  return (
    <div className="filter">
      <h3>Фильтр товаров</h3>
      {filters.map((filter, id) => (
        <div key={id}>
          <div
            onClick={filter.action}
            className="filter-item"
          >
            <p className={mainStore.sortItems === filter.title ? 'text-focus' : ''}>{filter.title}</p>
          </div>
        </div>
        )
      )}
    </div>
  );
}

export default observer(FilterPrice);
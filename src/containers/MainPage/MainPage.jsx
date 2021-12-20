import { observer } from 'mobx-react';
import React, { useRef, useEffect } from 'react';
import { useStore, withStore } from '../../store/storeHOC';
import Banner from './Banner/Banner';
import Information from './Information/Information';
import Items from './Items/Items';

const MainPage = () => {
  const {mainStore} = useStore();
  const refScroll = useRef(null);
  const ScrollToInfo = () => refScroll.current.scrollIntoView({ behavior: 'smooth' }) 
  useEffect(() => {
    mainStore.getInfoItems();
  }, [mainStore]);
  return (
  <div>
    <Banner ScrollToInfo={ScrollToInfo} />
    <Information refScroll={refScroll} />
    <Items />
  </div>
)
};

export default observer(MainPage);

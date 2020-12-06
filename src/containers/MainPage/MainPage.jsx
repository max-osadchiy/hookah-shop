import React, { useRef } from 'react';
import Banner from './Banner/Banner';
import Information from './Information/Information';
import Items from './Items/Items';

const MainPage = () => {
  const refScroll = useRef(null);
  const ScrollToInfo = () => refScroll.current.scrollIntoView({ behavior: 'smooth' }) 
  return (
  <div>
    <Banner ScrollToInfo={ScrollToInfo} />
    <Information refScroll={refScroll} />
    <Items />
  </div>
)
};

export default MainPage;

import React from 'react';
import { AboutUs } from './components/AboutUs';
import { Banner } from './components/Banner';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Price } from './components/Price';
import './scss/app.scss';
import menuItems from './data/menuItems.json';
import priceCards from './data/priceCards.json'
import reviewsList from './data/slidesReviews.json'
import { Reviews } from './components/Reviews';

function App() {
  return (
    <>
      <Header list={menuItems} />
      <Banner />
      <AboutUs />
      <Counter />
      <Price list={priceCards} />
      <Reviews list={reviewsList} />
    </>
  );
}

export default App;

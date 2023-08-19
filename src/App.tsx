import React from 'react';
import { AboutUs } from './components/AboutUs';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import './scss/app.scss';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
    </>
  );
}

export default App;

import React from 'react';
import './App.css';

import CardContainer from './components/CardComponents/CardContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div className='appContainer'>
    <a href="https://reactjs.org" target="_blank">
    <HeaderContainer />
     <CardContainer />
     </a>
    </div>
  );
};

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Body />
      <Body />
      <Body />
    </div>
  );
}

export default App;

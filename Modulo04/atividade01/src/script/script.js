import React from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Tabs />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Content from './components/content/content';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className = "container">
        <Header />
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;

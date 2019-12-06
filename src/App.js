import React from 'react';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className = "container">
        <Header />
        <Menu />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;

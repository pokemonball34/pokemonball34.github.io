import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Banner, Navbar } from './components';
import { About, Footer, Header, Work } from './containers';

const App = () => {
  return (
    <div className="App">
      
      <Header />
      <Navbar />
      <Banner />
      <Header />
      <About />
      <Work />
      <Footer />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


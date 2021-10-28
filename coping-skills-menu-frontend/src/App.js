import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import React from 'react';

function App() {
    return (
        <div>
          <Header />
          <Navigation/>
          <Footer/>
        </div>
  );
}

export default App;

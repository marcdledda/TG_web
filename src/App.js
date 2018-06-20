import React, { Component } from 'react';
import FirstSection from './components/FirstSection';
import Overview from './components/Overview';
import Scores from './components/Scores';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0 App">
        <FirstSection />
        <Overview  />
        <Scores />
      </div>
    );
  }
}


export default App;

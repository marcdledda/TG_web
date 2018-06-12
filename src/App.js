import React, { Component } from 'react';
import FirstSection from './components/FirstSection';
import Overview from './components/Overview';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0 App">
        <FirstSection />
        <Overview  />
      </div>
    );
  }
}


export default App;

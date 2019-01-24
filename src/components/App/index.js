import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import Series from '../../containers/Series';
import SeriesList from '../SeriesList'


class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series App</h1>
        </header>
        <Series />
        {/* <SeriesList /> */}
      </div>
      
    );
  }
}

export default App;

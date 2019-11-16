import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/form/search-bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      startDate: '',
      endDate: ''
    }
  }
  render() {
    return (
        <div className="App">
          <SearchBar
          />
        </div>
    );
  }
}

export default App;

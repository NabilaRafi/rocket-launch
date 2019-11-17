import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store'
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
      <Provider store={configureStore}>
        <div className="App">
          <header>Launch Details</header>
          <SearchBar />
        </div>
      </Provider>
    );
  }
}

export default App;

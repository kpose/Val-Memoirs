import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar/SearchBar';

    class App extends Component {
      onSearchSubmit(term) {
        console.log(term);
    }
      render() {
        return (
          <div>
            <Header />
          <div>
            <SearchBar userSubmit={this.onSearchSubmit}/>
        </div>
          </div>
        );
      }
    }
    export default App;
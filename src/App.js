import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar/SearchBar';

    class App extends Component {
      render() {
        return (
          <div>
          <Header />
          <div>
            <SearchBar />
        </div>
          </div>
        );
      }
    }
    export default App;
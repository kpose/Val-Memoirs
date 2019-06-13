import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Images from './components/Images';

    class App extends Component {
      render() {
        return (
          <div>
          <div>
          <Header />

          </div>
          <Images />
          </div>
        );
      }
    }
    export default App;
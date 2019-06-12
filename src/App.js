import React, { Component } from 'react';
    import './App.css';
    import Header from './components/Header';
    import AuthorRow from  './components/AuthorRow';


    class App extends Component {
      render() {
        return (
          <div>
          <Header />

          <div className= "Container">
          <AuthorRow
              fullname={'First Last'}
              linkText={'Comments'}
              onPressLinkText={() => {
              console.log('Pressed link!');
              }}
              />
          </div>
          
          </div>
        );
      }
    }
    export default App;
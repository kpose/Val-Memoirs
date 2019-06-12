import React, { Component } from 'react';
    import './App.css';
    import Header from './components/Header';
    import Card from './components/Card';
   


    class App extends Component {
      render() {
        return (
          <div>
          <Header />

          <div className= "Container">
            <Card
              fullname={'First Last'}
              linkText={'Comments'}
              onPressLinkText={() => {
                console.log('Pressed link!');
              }}
              image={{ uri: 'https://unsplash.it/600/600' }}
              />

          </div>
          
          </div>
        );
      }
    }
    export default App;
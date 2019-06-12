import React, { Component } from 'react';
    import './App.css';
    import Header from './components/Header';
    import Avatar from  './components/Avatar';


    class App extends Component {
      render() {
        return (
          <div>
          <Header />

          <div className= "Container">
          <Avatar initials={'FL'} size={35} backgroundColor={'teal'} /> 
          </div>
          
          </div>
        );
      }
    }
    export default App;
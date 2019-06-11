import React from 'react';
import Avatar from './Avatar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Container">
      <Avatar initials={'FL'} size={35} backgroundColor={'teal'} />
      </div>
      </header>
    </div>
  );
}

export default App;

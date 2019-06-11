import React from 'react';
import './App.css';

import AuthorRow from './AuthorRow';
//import Avatar from './Avatar';

function App() {
  return (
    //<div className="App">
    

    <body className="Container">
      <div >
        <AuthorRow
          fullname={'First Last'}
          linkText={'comments'}
          onPressLinkText={()=> {
            console.log('pressed link')
          }}
          />
          </div>
    </body>

    //</div>
  );
}

export default App;

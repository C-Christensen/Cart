import React from 'react';
import './App.css';
import { render } from '@testing-library/react';




class App extends React.Component<{}, {}> {
    public render(){ 
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
       </header>
       <p className="Intro">Life is much better when you have an online order on the way!</p>
     </div>
    );
  }
}

export default App;

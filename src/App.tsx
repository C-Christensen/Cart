import React from 'react';
import './App.css';
import { render } from '@testing-library/react';


// interface that contain an Array of type ShoppingItem
interface AppState{
  items: Array<ShoppingItem>; 

}

// keep track of name and price of the shopping items
class ShoppingItem{
  public name = "";
  public price = 0.0;
}

// no props
class App extends React.Component<{}, AppState> {

  constructor(props: any, state: any){
  super(props, state);}

    public render(){ 
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
       </header>
       <p className="Intro">Life is much better when you have an online order on the way!</p>

       <ol>
         <li>Tea</li>
         <li>Latte</li>
         <li>Mocha</li>
         </ol>
     </div>
    );
  }
}

export default App;

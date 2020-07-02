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
  super(props, state);

  const tea: ShoppingItem = {
    name: "Tea",
    price: 1.5
  }

  const latte: ShoppingItem = {
    name: "Latte",
    price: 4.5
  }

  const mocha: ShoppingItem = {
    name: "Mocha",
    price: 3.5
  }

  const americano: ShoppingItem = {
    name: "Americano",
    price: 2.5
  }

  // state object of the constructor
  this.state = {
    items: [tea, latte, mocha, americano]
   };
  }

    public render(){ 
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
       </header>
       <p className="Intro">Life is much better when you have an online order on the way!</p>

      {/* state object's list using map*/}
       <ol>
         {this.state.items.map(item => (
           <li key = {item.name}>{item.name} ${item.price}</li>
         ))}
         </ol>
     </div>
    );
  }
}

export default App;

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
        <ul>
         {this.state.items.map(item => (
           <li key = {item.name}>{item.name} ${item.price}</li>
         ))}
        </ul>

        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="Enter an item" onChange={this.changeInputName} />
          <input type="text" placeholder="Enter the item's price" onChange={this.changeInputPrice} />

          <input type = "submit" />
 
        </form>
     </div>
    );
  }

  private inputValue = "";
  private inputPrice = "";

  private changeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputValue = event.target.value;
  };

  private changeInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputPrice = event.target.value;
  };

  // constraining the type of the event 
  private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // generate an alert with the valye of the textbox
    alert("Item name: " + this.inputValue + "\nPrice: $" + this.inputPrice);

    const newItem: ShoppingItem = {name: this.inputValue, price: parseFloat(this.inputPrice)}

    // updating the state of the component
    this.setState({
      // Solution 1:
      items: this.state.items.concat(newItem)
    });
  };

}

export default App;

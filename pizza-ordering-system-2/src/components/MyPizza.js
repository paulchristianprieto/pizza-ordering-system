import React, { Component } from 'react';
import './MyPizza.css';
import ToppingsMenu from './ToppingsMenu'


class MyPizza extends Component {

  handleIncrement(id){
    let toppings = this.state.toppings;
    let index = toppings.findIndex(x => x.id === id);
    if(toppings[index].quantity < 5)
      toppings[index].quantity++;
    else if(toppings[index].quantity === 5){
      alert("WARNING: PIZZA WILL OVERFLOW");  
      toppings[index].quantity++;
    }
    else if(toppings[index].quantity < 10)
      toppings[index].quantity++;
    else if(toppings[index].quantity === 10)
      alert("MAXIMUM TOPPINGS COUNT REACHED");
    this.setState({toppings:toppings});
    console.log(toppings[index].quantity);
  }

  handleDecrement(id){
    let toppings = this.state.toppings;
    let index = toppings.findIndex(x => x.id === id);
    if(index > 0){
      if(toppings[index].quantity > 0)
        toppings[index].quantity--;
      else
        alert("CAN'T PUT NEGATIVE TOPPINGS!");
    }
    else{
      if(toppings[index].quantity > 1)
        toppings[index].quantity--;
      else
        alert("PIZZA CAN'T HAVE NO CHEESE!");
    }
    this.setState({toppings:toppings});
  }

  handleSubmit(){
    alert("Submitted");
  }

  constructor(props){
    super(props);
    this.state = { 
      toppings: [
      { id: "cheese",
        name: "Cheese",
        price: "5",
        quantity: 1 },
      { id: "shrimp",
        name: "Shrimp",
        price: "10",
        quantity: 0 },
      { id: "pork",
        name: "Pork",
        price: "15",
        quantity: 0 },
      { id: "beef",
        name: "Beef",
        price: "20",
        quantity: 0 },
      { id: "garlic",
        name: "Garlic",
        price: "5",
        quantity: 0 },
      { id: "pepperoni",
        name: "Pepperoni",
        price: "10",
        quantity: 0}
    ]}    
  };

  render(){
    var myPizzaToppings = this.state.toppings.map((myPizzaToppings) =>
      <ToppingsMenu toppings = {myPizzaToppings} key = {myPizzaToppings.id}
       onIncrement={() => this.handleIncrement(myPizzaToppings.id)}
       onDecrement={() => this.handleDecrement(myPizzaToppings.id)}
       onSubmit={() => this.handleSubmit(myPizzaToppings.id)}
      />
    );

    return(
      <div className = "toppings-container">
        <h2> Available Toppings </h2>
        <ul className = "toppings" toppings = {this.state.myPizzaToppings}> {myPizzaToppings} </ul>
        <br/>
        <button onClick={this.props.onSubmit}>Submit</button>
      </div>


    );
  }
}

export default MyPizza;

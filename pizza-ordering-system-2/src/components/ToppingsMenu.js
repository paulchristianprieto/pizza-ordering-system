import React, { Component } from 'react';
import './ToppingsMenu.css'

class ToppingsMenu extends Component{

	render(){

		var 
		{id,
		 name,
		 price,
		 quantity} = this.props.toppings;

		var totalPrice = price * quantity;

		return(
			<div>
				<li className = "toppings-list">
					<p className = "toppings-price"> ${price} </p>
					<h2> {name}</h2>
					<p> Quantity: <strong> {quantity} </strong> 
					&nbsp;&nbsp;&nbsp;
					<a href="# " onClick={this.props.onIncrement}><strong>+</strong></a>
					&nbsp;
					<a href="# " onClick={this.props.onDecrement}><strong>-</strong></a>
					</p>
					<h4> Total Price: ${totalPrice}</h4>
				</li>
				
			</div>
		);
	}
}

export default ToppingsMenu;
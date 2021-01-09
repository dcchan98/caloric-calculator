/** @format */

import React, { Component } from "react";

export default class Button extends Component {
	constructor(props) {
		super(props);
		this.state = { displayNum: 0 };

		// This binding is necessary to makeIncrements` work in the callback
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}


	handleIncrement() {
		this.setState((state) => ({
			displayNum: this.state.displayNum + 1,
		}));
	}

	handleDecrement() {
		this.setState((state) => ({
			displayNum: this.state.displayNum - 1,
		}));
	}

	render() {
		return (
			<div>
				<h2>{this.state.displayNum}</h2>
				<button onClick={this.handleIncrement}>Increment</button>
				<button onClick={this.handleDecrement}>Decrement</button>
			</div>
		);
	}
}

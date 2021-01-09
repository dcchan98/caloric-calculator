/** @format */
import React, { Component } from "react";

export default class FoodItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>
					{this.props.foodName} p:{this.props.protein} c:{this.props.carbs} f:
					{this.props.fats}
				</p>
				<button onClick={this.props.handleDelete}>Delete</button>
			</div>
		);
	}
}

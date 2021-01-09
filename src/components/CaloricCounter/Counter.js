/** @format */
import { v4 as uuidv4 } from "uuid";

import React, { Component } from "react";
import Food from "../../model/Food";

import FoodItem from "./FoodItem";

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			proteins: 0,
			carbs: 0,
			fats: 0,
			listOfFood: [],
		};
		this.handleName = this.handleName.bind(this);
		this.handleProteins = this.handleProteins.bind(this);
		this.handleCarbs = this.handleCarbs.bind(this);
		this.handleFats = this.handleFats.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		

		// This binding is necessary to makeIncrements` work in the callback
	}

	delete(foodToDelete) {
		console.log("called");
		const foodList = this.state.listOfFood.filter((food) => food != foodToDelete);
		this.setState({listOfFood:foodList});
	}


	handleName(event) {
		this.setState({ name: event.target });
	}
	handleProteins(event) {
		this.setState({ proteins: Number(event.target.value) });
	}
	handleCarbs(event) {
		this.setState({ carbs: Number(event.target.value) });
	}
	handleFats(event) {
		this.setState({ fats: Number(event.target.value) });
	}
	handleSubmit(event) {
		event.preventDefault();
		let myFood = new Food(
			this.state.name,
			this.state.proteins,
			this.state.carbs,
			this.state.fats
		);
		this.state.listOfFood.push(myFood);
		this.setState({ listOfFood: this.state.listOfFood });
	}

	render() {
		return (
			<div>
				<form>
					<label htmlFor='fname'>Food Name: </label>
					<input onChange={this.handleName} type='text' id='fname' />
					<br />
					<label htmlFor='p'>Proteins: </label>
					<input onChange={this.handleProteins} type='text' id='p' />
					<br />
					<label htmlFor='c'>Carbs: </label>
					<input onChange={this.handleCarbs} type='text' id='c' />
					<br />
					<label htmlFor='f'>Fats: </label>
					<input onChange={this.handleFats} type='text' id='f' />
					<br />
					<input onClick={this.handleSubmit} type='submit' value='Submit' />
				</form>

				<div>
					{this.state.listOfFood.map((food) => (
						<FoodItem
							key={uuidv4(food)}
							foodName={food.name}
							carbs={food.getC()}
							fats={food.getF()}
							protein={food.getP()}
							handleDelete={this.delete.bind(this,food)}
						/>
					))}
				</div>
			</div>
		);
	}
}

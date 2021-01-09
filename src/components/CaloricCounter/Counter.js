/** @format */

import React, { Component } from "react";
import Food from "../../model/Food";

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { 
      name:"",
      proteins:0,
      carbs:0,
      fats:0,
      listOfFood: [] 
    };
    this.handleName = this.handleName.bind(this);
    this.handleProteins = this.handleProteins.bind(this);
    this.handleCarbs = this.handleCarbs.bind(this);
    this.handleFats = this.handleFats.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


		// This binding is necessary to makeIncrements` work in the callback
  }
  
  handleName(event) {
    this.setState({name: event.target.value});
  }
  handleProteins(event) {
    this.setState({proteins: Number(event.target.value)});
  }
  handleCarbs(event) {
    this.setState({carbs: Number(event.target.value)});
  }
  handleFats(event) {
    this.setState({fats: Number(event.target.value)});
  }
  handleSubmit(event) {
    event.preventDefault();
    let myFood = new Food(this.state.name,this.state.proteins,this.state.carbs,this.state.fats);
    this.state.listOfFood.push(myFood);
    console.log(this.state.listOfFood)
  }

	render() {
		return (
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
        <input onClick={this.handleSubmit} type="submit" value="Submit" />
			</form>
		);
	}
}
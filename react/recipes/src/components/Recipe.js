import React, { Component } from 'react';
import '../styles/Recipe.css'

class Recipe extends Component {
	render() {
		const {title, img, instructions} = this.props;
		const ingrediants = this.props.ingrediants.map((ing, i) => (
			<li key={i}>{ing}</li>
		))
		return (
			<div>
				<img src={img} alt={title} />
				<div>Recipe for {title}</div>
				<ul>
					{ingrediants}
				</ul>
				<p>{instructions}</p>
			</div>
		)
	}
}

export default Recipe;
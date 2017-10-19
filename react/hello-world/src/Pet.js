import React, { Component } from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

class Pet extends Component {
	render() {
		return (
			<div className="card">
				<h2 className="name">Moxie</h2>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeLhOTEqGQr6dhj8-s3MumDuNon40G0srsYOGaPgH1glxDFuLaA"
					 alt="cat pic" 
				/>
				<h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
				<HobbyList />
			</div>
		)
	}
}

export default Pet;
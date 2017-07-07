import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Selectors from "./selectors/selectors";
import RepList from "./repList/repList";
import RepInfo from "./repInfo/repInfo";

const apiUrl = "http://localhost:3000";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedState: "AL",
			representativeType: "representatives",
			currentReps: [],
			currentRep: {},
			error: "",
			loading: false
		};
		//don't need to do the .bind trick here because CRA enables the property initializer syntax
	}

	handleRepClick = (event) => {
		this.setState({
			currentRep: this.state.currentReps[event.currentTarget.getAttribute("data-index")]
		});
	}

	selectChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
			currentReps: [],
			currentRep: {}
		});
	}

	submitFormHandler = (event) => {
		event.preventDefault();
		this.setState({
			loading: true,
			error: ""
		});

		if(!this.state.selectedState || !this.state.representativeType) {
			this.setState({
				error: "Please ensure you have a state and rep type selected"
			});
		} else {
			axios.get(`${apiUrl}/${this.state.representativeType}/${this.state.selectedState}`)
			.then(results => {
				if(results.data.success) {
					this.setState({
						currentReps: results.data.results,
						currentRep: {},
						loading: false
					});
				} else {
					this.setState({
						error: results.data.error,
						loading: false
					});
				}
			})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});
		}
	}

	render() {
		return (
			<div className="app">
				<h1 className="app__header">Who's My Representative?</h1>
				<Selectors 
					submitFormHandler={ this.submitFormHandler }
					selectChangeHandler={ this.selectChangeHandler }
					representativeType={ this.state.representativeType }
					selectedState={ this.state.selectedState }
				/>
				{ this.state.error ? <section className="errors">{ this.state.error }</section> : "" }				
				<RepList 
					repList={ this.state.currentReps }
					repType={ this.state.representativeType }
					handleRepClick={ this.handleRepClick }
				/>
				<RepInfo
					rep={ this.state.currentRep }
				/>
			</div>
		);
	}
}

export default App;

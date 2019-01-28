import React from 'react';
import axios from 'axios';
import GenGroup from '../genGroup/genGroup';

class Encounters extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			encounter_name: '',
			monsters: []
		};
	}

	componentDidMount(){

	}

	// extra in case you need to reference

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

 	readyMonsters = (monsters) => {
 		this.setState({
 			monsters: monsters
 		})
 	}

 	postEncounter = event => {
 		event.preventDefault()

 		// console.log(this.state.monsters)
 		// return

 		let ar = this.state.monsters

		let ki = []
		let vi = []

		for (let i = 0; i < ar.length; i++){
		  ki.push(Object.keys(ar[i]));
		  vi.push(Object.values(ar[i]));
		}

		let v_ar = vi.flat()
		let k_ar = ki.flat()

		for (let i = 0; i < v_ar.length; i++){
		  if (typeof v_ar[i] == 'object'){
		    v_ar[i] = Array.from(v_ar[i]).join(' ')
		  }
		}

		for (let j = 0; j < v_ar.length; j++){
		  if (typeof v_ar[j] == 'number'){
		    v_ar[j] = v_ar[j] + ''
		  }
		}

 		let url = window.location.href
	  let id = url.substring(url.lastIndexOf('/') + 1);
	  let encounter = {"encounter_name": this.state.encounter_name, "k": k_ar, "v": v_ar }
	  axios.post(`https://dnd-backend.herokuapp.com/encounters/${id}`, encounter)
	  .then(response => {
	  	console.log(response)
	  })
	  .catch(error => {
	  	console.log(error)
	  })

 	}

	render() {
		console.log(this.state)
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder='encounter name'
						onChange={this.handleChange}
						name="encounter_name"
						value={this.state.encounter_name}
					/>
				</form>
				<button onClick={this.postEncounter}>test</button>
				<GenGroup readyMonsters={this.readyMonsters}/>

			</div>
		)
	}
}

export default Encounters;

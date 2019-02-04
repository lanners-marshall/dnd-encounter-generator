import React from 'react';
import axios from 'axios';
import GenGroup from '../genGroup/genGroup';
import { Link } from "react-router-dom";
import {EContainer, Spacing, DeletePs, SessionSP, Eh2, EColorDiv, Sbmit, BottomEColorDiv} from './sessinos_css.js';

class Session extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			encounter_name: '',
			monsters: [],
			encounters: [],
			boolv: false
		};
	}

	componentDidMount(){
		let url = window.location.href
	  let id = url.substring(url.lastIndexOf('/') + 1);
		axios.get(`https://dnd-backend.herokuapp.com/sessions/${id}`,
			{headers: {
				"Authorization": localStorage.getItem('token')
				}
			}
		)
		.then(response => {
			console.log(response)
			this.setState({
				encounters: response.data,
			})
		})
		.catch(error => {
			//console.log(error)
		})
	}

	handleBool = () => {
		this.setState({
			boolv: false
		})
	}

	trueBool = () => {
		this.setState({
			boolv: true
		})
	}

	//   extra in case you need to reference

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

 	readyMonsters = (monsters) => {
 		this.setState({
 			monsters: monsters
 		})
 	}

 	update = () => {
 		let url = window.location.href
	  let id = url.substring(url.lastIndexOf('/') + 1);
		axios.get(`https://dnd-backend.herokuapp.com/sessions/${id}`,
			{headers: {
				"Authorization": localStorage.getItem('token')
				}
			}
		)
		.then(response => {
			// console.log(response)
			this.setState({
				encounters: response.data
			}, window.scrollTo(0, 0))
		})
		.catch(error => {
			console.log(error)
		})
 	}

 	deleteEncounter = event => {
 		event.preventDefault()
 		axios.delete(`https://dnd-backend.herokuapp.com/encounters/${event.target.id}`)
 		.then(response => {
 			// console.log(response)
 			this.update()
 		})
 		.catch(error => {
 			console.log(error)
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
	  	this.setState({
 				encounter_name: ''
 			}, this.update())
	  })
	  .catch(error => {
	  	console.log(error)
	  })

 	}

	render() {
		console.log(this.state)
		return (
			<div>
				<Spacing/>
				<EColorDiv>
					<Eh2>Encounters List</Eh2>
					<EContainer>
						{this.state.encounters.map(e => {
							return <div key={e.id}><Link to={`/view/encounters/${e.id}`}><SessionSP>{e.encounter_name}</SessionSP></Link><DeletePs id={e.id} onClick={this.deleteEncounter}>X</DeletePs></div>
						})}
					</EContainer>
				</EColorDiv>
				<GenGroup readyMonsters={this.readyMonsters} handleBool={this.handleBool} trueBool={this.trueBool}/>
					{this.state.boolv ? (
					<BottomEColorDiv>
						<form>
							<input
								type="text"
								placeholder='encounter name'
								onChange={this.handleChange}
								name="encounter_name"
								value={this.state.encounter_name}
							/><br/>
							<Sbmit onClick={this.postEncounter}>Post Encounter to session</Sbmit>
						</form>
					</BottomEColorDiv>
					) : 
					null
				}
				<Spacing/>
			</div>
		)
	}
}

export default Session;

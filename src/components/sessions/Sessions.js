import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { SForm, Sbtn, Container, DeleteP, SessionP, ErrorD } from "./sessinos_css.js";

class Sessions extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			session_name: '',
			sessions: [],
			error: ''
		};
	}

	componentDidMount(){
		let id = localStorage.getItem('user_id')
		axios.get(`https://dnd-backend.herokuapp.com/users/${id}`,
			{headers: {
				"Authorization": localStorage.getItem('token')
				}
			}
		)
		.then(response => {
			console.log(response)
			this.setState({
				sessions: response.data.sessions
			})
		})
		.catch(error => {
			console.log(error)
		})
	}

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

 	createSession = event => {
 		event.preventDefault()
 		if (!this.state.session_name){
 			this.setState({
 				error: "please provide session name"
 			})
 			// console.log(this.state)
 			return
 		} else {
 			this.setState({
 				error: ''
 			})
 		}
 		let session = {"session_name": this.state.session_name, user_id: localStorage.getItem('user_id')}
 		axios.post('https://dnd-backend.herokuapp.com/sessions/', session)
 		.then(response => {
 			// console.log(response)
 			this.setState({
 				session_name: ''
 			})
 			this.update()
 		})
 		.catch(error => {
 			console.log(error)
 		})
 	}

 	deleteSession = event => {
 		event.preventDefault()
 		axios.delete(`https://dnd-backend.herokuapp.com/sessions/${event.target.id}`)
 		.then(response => {
 			// console.log(response)
 			this.update()
 		})
 		.catch(error => {
 			console.log(error)
 		})
 	}

 	update = () => {
 		let id = localStorage.getItem('user_id')
		axios.get(`https://dnd-backend.herokuapp.com/users/${id}`,
			{headers: {
				"Authorization": localStorage.getItem('token')
				}
			}
		)
		.then(response => {
			// console.log(response)
			this.setState({
				sessions: response.data.sessions
			})
		})
		.catch(error => {
			console.log(error)
		})
 	}

	render() {
		// console.log(this.state)
		return (
			<Container>
				<div>
					{this.state.sessions.map(s => {
						return <div key={s.session_id}><Link to={`/view/sessions/${s.session_id}`}><SessionP id={s.session_id}>{s.session_name}</SessionP></Link><DeleteP id={s.session_id} onClick={this.deleteSession}>X</DeleteP></div>
					})}
				</div>
				<SForm onSubmit={this.createSession}>
					<h2>Create Game Session</h2>
					<input
						type="text"
						placeholder='session name'
						onChange={this.handleChange}
						name="session_name"
						value={this.state.session_name}
					/>
					<Sbtn onClick={this.createSession}>Create Session</Sbtn>
				</SForm>

				{this.state.error ? (
					<ErrorD>{this.state.error}</ErrorD>
					) : null
				}
				
			</Container>
		)
	}
}


export default Sessions;

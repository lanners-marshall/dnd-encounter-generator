import React from 'react';
import axios from 'axios';
import {SignUpForm, Container, FlexDiv, Submit} from './signup_css.js';
import "./custom.css";
import dragon from '../images/dragon.jpg';
import dragon2 from '../images/dragon2.jpg';


class SignUp extends React.Component {
	constructor(){
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password_confirm: '',
			error_name: '',
			error_password: '',
			email_error: '',
		};
	}

	componentDidMount(){}

	handleChange = event => {
 	   this.setState({[event.target.name]: event.target.value})
 	 }

	render() {
		return (
			<Container>
				<FlexDiv>
						<img src={dragon2} alt="dragon" className="dragon2" />
				 		<SignUpForm>
				 			<h2>Registration Info</h2>
					 		<input
								type="text"
						 		placeholder='Name'
						 		onChange={this.handleChange}
						 		name="name"
						 		value={this.state.name}
					 		/><br/>
					 		<input
					 			type="email"
					 			placeholder='Email'
					 			onChange={this.handleChange}
					 			name="email"
					 			value={this.state.email}
					 		/><br/>
					 		<input
					 			type="password"
					 			placeholder="Password"
					 			onChange={this.handleChange}
					 			name="password"
					 			value={this.state.password}
					 		/><br/>
					 		<input
					 			type="password_confirm"
					 			placeholder="Password Confirm"
					 			onChange={this.handleChange}
					 			name="password_confirm"
					 			value={this.state.password_confirm}
					 		/><br/>
					 		<Submit>Submit</Submit>
					 </SignUpForm>
					 <img src={dragon} alt="dragon" className="dragon" />
					 
				</FlexDiv>
			</Container>
		)
	}
}

export default SignUp;


// <img src={dragon} alt="dragon" className="dragon" />
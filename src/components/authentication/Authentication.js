import React from 'react';
import axios from 'axios';
import {SignUpForm, Container, FlexDiv, Submit, Errors, Register, Login} from './signup_css.js';
import "./custom.css";
import dragon from '../images/dragon.jpg';
import dragon2 from '../images/dragon2.jpg';


class SignUp extends React.Component {
	constructor(){
		super();
		this.state = {
			register: true,
			name: '',
			email: '',
			password: '',
			password_confirm: '',
			error_name: '',
			error_email: '',
			compare: '',
			length: '',
			upper: '',
			lower: '',
			number: '',
			special: '',
			loginName: '',
			loginPassword: '',
		};
	}

	componentDidMount(){}

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

 	login = event => {
 		let user = {username: this.state.loginName, password: this.state.loginPassword}
		axios.post("https://dnd-backend.herokuapp.com/users/login", user)
		.then(response => {
			// console.log(response);
			this.setState({
				loginName: '',
				loginPassword: '',
			})
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('user_id', response.data.id);
			this.props.history.push('/')
		})
		.catch(error => {
			console.log(error);
		})
 	}

 	register = event => {
 		event.preventDefault();

 		let pass = this.state.password;
 		let error = false;


 		//error check for name field 
 		if (!this.state.name){
 			this.setState({
 				error_name: 'please provide name'
 			})
 			error = true;
 		} else if (this.state.name.length < 4) {
 			this.setState({
 				error_name: 'name must be at least 4 characters long'
 			})
 			error = true;
 		} else {
 			this.setState({
 				error_name: ""
 			})
 		}

 		//error check for email
 		let isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 		if (!isEmail.test(this.state.email)){
 			this.setState({
 				error_email: "lease provide valid email"
 			})
 			error = true;
 		} else {
 			this.setState({
 				error_email: ''
 			})
 		}

 		//check on password match
 		if (pass !== this.state.password_confirm){
 			this.setState({
 				compare: "passwords did not match."
 			})
 			error = true;
 		} else {
 			this.setState({
 				compare: ''
 			})
 		}

 		//check on password length
 		if (pass.length < 8 ){
 			this.setState({
 				length: "MUST contain at least 8 characters (12+ recommended)."
 			})
 			error = true;
 		} else {
 			this.setState({
 				length: ''
 			})
 		}

 		//has no lower case letters
 		if (pass.toUpperCase() === pass){
 			this.setState({
 				upper: 'MUST contain at least one lowercase letter.'
 			})
 			error = true;
 		} else {
 			this.setState({
 				upper: ''
 			})
 		}

 		//has no upper case letters
 		if (pass.toLowerCase() === pass){
 			this.setState({
 				lower: 'MUST contain at least one uppercase letter.'
 			})
 			error = true;
 		} else {
 			this.setState({
 				lower: ''
 			})
 		}

 		let hasNum = /\d/;

 		//must contain at least one number
 		if (hasNum.test(pass) === false){
 			this.setState({
 				number: "MUST contain at least one number."
 			})
 			error = true;
 		} else {
 			this.setState({
 				number: ''
 			})
 		}

		function containsSpecialCharacters(str){
		  let regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
			return regex.test(str);
		}

		if (containsSpecialCharacters(pass) === false){
			this.setState({
				special: `MUST contain at least one special character [!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]`
			})
			error = true;
		} else {
			this.setState({
				special: ''
			})
		}

		this.setState({
			name: '',
			email: '',
			password: '',
			password_confirm: '',
		})

		if (error === true){
			return
		}

		if (error === false) {
			let user = {username: this.state.name, email: this.state.email, password: this.state.password};
			axios.post("https://dnd-backend.herokuapp.com/users/register", user)
			.then(response => {
				// console.log(response);
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('user_id', response.data.id);
				this.props.history.push('/')
			})
			.catch(error => {
				console.log(error)
			})
		}
	}

	switch = () => {
		this.setState({
			register: !this.state.register
		})
	}

	render() {
		return (
			<Container>
				{this.state.register ? (
				<div>
					<FlexDiv>
							<img src={dragon2} alt="dragon" className="dragon2" />
					 		<SignUpForm onSubmit={this.register}>
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
						 			type="password"
						 			placeholder="Password Confirm"
						 			onChange={this.handleChange}
						 			name="password_confirm"
						 			value={this.state.password_confirm}
						 		/><br/>
						 		<Submit onClick={this.register}>Submit</Submit>
						 		<Login onClick={this.switch}>already have an account? log in here.</Login>
						 </SignUpForm>
						 <img src={dragon} alt="dragon" className="dragon" />
					</FlexDiv>
					<Errors>
						<p>{this.state.error_name}</p>
						<p>{this.state.error_email}</p>
						<p>{this.state.compare}</p>
						<p>{this.state.length}</p>
						<p>{this.state.upper}</p>
						<p>{this.state.lower}</p>
						<p>{this.state.number}</p>
						<p>{this.state.special}</p>
					</Errors>
				</div>
				) : 

				<div>
					<FlexDiv>
							<img src={dragon2} alt="dragon" className="dragon2" />
					 		<SignUpForm onSubmit={this.register}>
					 			<h2>Log In</h2>
						 		<input
									type="text"
							 		placeholder='Name'
							 		onChange={this.handleChange}
							 		name="loginName"
							 		value={this.state.loginName}
						 		/><br/>
						 		<input
						 			type="password"
						 			placeholder="Password"
						 			onChange={this.handleChange}
						 			name="loginPassword"
						 			value={this.state.loginPassword}
						 		/><br/>
						 		<Submit onClick={this.login}>Submit</Submit>
						 		<Login onClick={this.switch}>Back to Sign Up</Login>
						 </SignUpForm>
						 <img src={dragon} alt="dragon" className="dragon" />
					</FlexDiv>
				</div>
				}
				
			</Container>
		)
	}
}

export default SignUp;
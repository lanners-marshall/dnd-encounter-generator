import React from 'react';
import axios from 'axios';
import {Errors, Sh2, Switch} from './signup_css.js';
import "./main.css";

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

	componentDidMount(){

	}

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

 	login = event => {
 		event.preventDefault();
 		let user = {username: this.state.loginName, password: this.state.loginPassword}
		axios.post("https://dnd-backend.herokuapp.com/users/login", user)
		.then(response => {
			console.log(response);
			this.setState({
				loginName: '',
				loginPassword: '',
			})
			localStorage.setItem('name', response.data.username);
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('user_id', response.data.id);
			this.props.history.push('/view/sessions')
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
 				length: "password MUST contain at least 8 characters (12+ recommended)."
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
 				upper: 'password MUST contain at least one lowercase letter.'
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
 				lower: 'password MUST contain at least one uppercase letter.'
 			})
 			error = true;
 		} else {
 			this.setState({
 				lower: ''
 			})
 		}

 		let hasNum = /\d/;

 		//password must contain at least one number
 		if (hasNum.test(pass) === false){
 			this.setState({
 				number: "password MUST contain at least one number."
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
				special: `password MUST contain at least one special character [!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]`
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
				localStorage.setItem('name', response.data.username);
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('user_id', response.data.id);
				this.props.history.push('/view/sessions')
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
			<div>
				{this.state.register ? (
				<div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
				  <div className="wrapper wrapper--w680">
				    <div className="card card-1">
				      <div className="card-heading"></div>
				      <div className="card-body">
				        <Sh2>Register</Sh2>
				        <form onSubmit={this.register}>
				          <div className="input-group">
				          	<input className="input--style-1" type="text" placeholder='Name' onChange={this.handleChange} name="name" value={this.state.name}/>
				          </div>
				          <div className="input-group">
				            <input className="input--style-1" type="email" placeholder='Email' onChange={this.handleChange} name="email" value={this.state.email} />
				          </div>
				          <div className="input-group"> 
				          	<input className="input--style-1" type="password" placeholder="Password" onChange={this.handleChange} name="password" value={this.state.password} />
				          </div>
				          <div className="input-group">
										<input className="input--style-1" type="password" placeholder="Password Confirm" onChange={this.handleChange} name="password_confirm" value={this.state.password_confirm}/>
				          </div>
				          <div className="p-t-20">
				            <button className="btn btn--radius btn--green" onClick={this.register} >Submit</button>
				          </div>
				          <Switch onClick={this.switch}>already have a account? Click here.</Switch>
				        </form>
				      </div>
				    </div>
				  </div>
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
				<div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
				  <div className="wrapper wrapper--w680">
				    <div className="card card-1">
				      <div className="card-heading"></div>
				      <div className="card-body">
				        <Sh2>Log In</Sh2>
				        <form onSubmit={this.login}>
				          <div className="input-group">
				          	<input className="input--style-1" type="text" placeholder='Name' onChange={this.handleChange} name="loginName" value={this.state.loginName}/>
				          </div>
				          <div className="input-group">
				            <input className="input--style-1" type="password" placeholder="Password" onChange={this.handleChange} name="loginPassword" value={this.state.loginPassword}/>
				          </div>
				          <div className="p-t-20">
				            <button className="btn btn--radius btn--green" onClick={this.login}>Submit</button>
				          </div>
				          <Switch onClick={this.switch}>Don't have an account? Click Here.</Switch>
				        </form>
				      </div>
				    </div>
				  </div>
				</div>
				}
			</div>
		)
	}
}

export default SignUp;
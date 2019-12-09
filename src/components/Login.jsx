import "../login.css"
import React, { Component } from 'react';
class SignUpContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:''
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	
	handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value});
	}
	
	handleSubmit(event){
		event.preventDefault();
		console.log('login-form, username: ');
		console.log(this.state.username);
		//request to server here
	}


	render() {
		return (
		<div className ="shadow-sm" id='signUpContainer'>
				<SignUpHeader title="NiekAab" />
			<div id='signUpFormContainer'>
			<form id="signUpForm">
				<div className='signUpRow'>
					<input type='text' placeholder='username' name='username' onChange={this.handleChange} />
				</div>
				<div className='signUpRow'>
					<input type='password' placeholder='password' name='password' onChange={this.handleChange}/>
				</div>
				<div className='signUpRow'>
					<button type='button' onClick={this.handleSubmit}>Login</button>
				</div>
			</form>
			</div>
		</div>
		)
	}
}



const SignUpHeader = props => (
	<div id='signUpHeader'>
		<div id='signUpHeaderTitle'>
			{props.title}
		</div>
	</div>
);





export default SignUpContainer
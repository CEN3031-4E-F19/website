import "../login.css"
import React, { Component } from 'react';
class SignUpContainer extends Component {
	render() {
		return (
			<div className ="shadow-sm" id='signUpContainer'>
				<SignUpHeader title="NiekAab" />
				<SignUpForm />
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

const FormInput = props => (
	<div className='signUpRow'>
		<input type={props.type} placeholder={props.placeholder} />
	</div>
);


const FormButton = props => (
	<div className='signUpRow'>
		<button type='button'>{props.title}</button>
	</div>
);

const SignUpForm = props => (
	<div id='signUpFormContainer'>
		<form id="signUpForm">
			<FormInput type="text" placeholder="email" />
				<FormInput type="password" placeholder="password" />
				<FormButton title="Login" />
		</form>
	</div>
);

export default SignUpContainer
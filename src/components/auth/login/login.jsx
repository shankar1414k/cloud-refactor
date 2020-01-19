import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import LoaderButton from './LoaderButton.js';
import './Login.css';
import Signup from '../signup/Signup.jsx'

import { withRouter } from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			email: '',
			password: ''
		};
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = async event => {
		event.preventDefault();
		this.setState({ isLoading: true });
		try {
			await Auth.signIn(this.state.email, this.state.password);
			this.props.history.push('/');
		} catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
	};

	fedLogin = () => {

		console.log("Test");
		Auth.federatedSignIn({provider: 'Google'}).then(t => {
			this.props.history.push('/');

		}).catch(r => {
			console.log("errr");
			console.log(r);
		});
		
	}

	gotoSignUp = () => {
		this.props.history.push('/sign-up');
	}

	render() {
		return (
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="email">
						Email
						<FormControl autoFocus type="text" value={this.state.email} onChange={this.handleChange} />
					</FormGroup>
					<FormGroup controlId="password">
						Password
						<FormControl value={this.state.password} onChange={this.handleChange} type="password" />
					</FormGroup>
					<LoaderButton
						block
						disabled={!this.validateForm()}
						type="submit"
						isLoading={this.state.isLoading}
						text="Login"
						loadingText="Logging in…"
					/>
				</form>

                <button onClick={this.fedLogin}> Sign In with Google</button>
                <button onClick={this.gotoSignUp}> Sign Up</button>
			</div>
		);
	}
}

export default withRouter(Login)
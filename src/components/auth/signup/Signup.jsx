import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import LoaderButton from '../login/LoaderButton.js';
import { withRouter } from 'react-router-dom'

export class Signup extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        given_name: '',
        family_name: ''
    }

    validateForm() {
		return this.state.username.length > 0 && this.state.password.length > 0 && this.state.password.given_name > 0 && this.state.password.family_name > 0;
	}

    handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
    };
    
    render() {
		return (
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="username">
						Username
						<FormControl autoFocus type="text" value={this.state.username} onChange={this.handleChange} />
					</FormGroup>
					<FormGroup controlId="email">
						Email
						<FormControl autoFocus type="text" value={this.state.email} onChange={this.handleChange} />
					</FormGroup>
					<FormGroup controlId="password">
						Password
						<FormControl value={this.state.password} onChange={this.handleChange} type="password" />
					</FormGroup>
					<FormGroup controlId="given_name">
						First Name
						<FormControl autoFocus type="text" value={this.state.given_name} onChange={this.handleChange} />
					</FormGroup>
					<FormGroup controlId="family_name">
						Last name
						<FormControl autoFocus type="text" value={this.state.family_name} onChange={this.handleChange} />
					</FormGroup>
					<LoaderButton
						block
						disabled={!this.validateForm()}
						type="submit"
						isLoading={this.state.isLoading}
						text="Submit"
						loadingText="Logging in…"
					/>
				</form>
			</div>
		);
	}
}

export default withRouter(Signup)


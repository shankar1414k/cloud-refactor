
import { LinkContainer } from 'react-router-bootstrap';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Auth } from 'aws-amplify';

class Welcome extends Component {

	state = {
        isAuthenticated: false,
        isAuthenticating: true,
        user: ''
    };
	async componentDidMount() {
		try {
            Auth.currentSession().then(sessionData =>{

                this.setState({isAuthenticated: true,
                user: sessionData.getIdToken().payload});
            });
		} catch (e) {

		}

		this.setState({ isAuthenticating: false });
	}

	render() {
		return (
			<div>
                {this.state.user.given_name}, {this.state.user.family_name} Welcome
			</div>
		);
	}
}

export default withRouter(Welcome);





















































// import React, { Component } from 'react'
// import { Auth } from 'aws-amplify';

// export class Welcome extends Component {

//     componentDidMount = () => {

//         Auth.currentSession()
//     .then(data => {
//         console.log('-------------');
//         console.log(data);

//         console.log(data.getIdToken().payload.given_name);
        
//     })
//     .catch(err => console.log(err));
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Welcome to App</h1>
//             </div>
//         )
//     }
// }

// export default Welcome



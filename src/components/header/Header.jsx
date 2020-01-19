import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Auth } from "aws-amplify";


export class header extends Component {

    state = {
      user: '',
      isAuthenticated: false
    }

    componentDidMount = () => {
        this.onLoad();
    }

    async onLoad() {
        try {
          await Auth.currentSession().then( sessionAttributes => {
            this.setState({user: sessionAttributes.getIdToken().payload, isAuthenticated: true});
          });
        }
        catch(e) {
          if (e !== 'No current user') {
            alert(e);
          }
        }
      }

      fedLogin = () => {
        Auth.federatedSignIn({provider: 'Google'});
      }

      logout = () => {
        console.log("sign out")
        Auth.signOut();
      }

    render() {

      const { values } = this.props;
      console.log(values);
      
        return (
            <Navbar className = "cr-header" bg="light" expand="lg">
                <Navbar.Brand href="/">Welcome { this.state.isAuthenticated &&
                    this.state.user.given_name
                  }</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/new-application">New Application</Nav.Link>
                        <Nav.Link href="/get-entries">View Applications</Nav.Link>
                        { this.state.isAuthenticated && 
                          <button onClick={this.logout} >Sign Out</button>                          
                        }
                        {!this.state.isAuthenticated &&                          
                          <button onClick={this.fedLogin} > Sign In with Google</button>
                        }
                    </Nav>
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default header

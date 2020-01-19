import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class Home extends React.Component {
  state = {
    user: {}
  }
  componentDidMount() {
    console.log("Home");
    Auth.currentSession().then(sessionData => this.setState({ user: sessionData.getIdToken().payload  }));
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.user.given_name} , {this.state.user.family_name}, {this.state.user.email} </h1>    
      </div>
    )
  }
}

export default withRouter(Home)
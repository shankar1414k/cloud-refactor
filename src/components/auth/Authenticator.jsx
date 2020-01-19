import React from 'react'
import { withRouter } from 'react-router-dom'

import Login from './login/login.jsx';
import SignUp from './signup/Signup.jsx';
class Authenticator extends React.Component {
  state = {
    showSignIn: true
  }
  switchState = (showSignIn) => {
    this.setState({
      showSignIn
    })
  }
  render() {
    const { showSignIn } = this.state
    return (
      <div>
        {
          showSignIn ? (
            <Login />
          ) : (
            <SignUp />
          )
        }
      </div>
    )
  }
}

export default withRouter(Authenticator)
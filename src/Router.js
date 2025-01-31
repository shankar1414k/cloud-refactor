import React from 'react'
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import { Auth } from 'aws-amplify'

import Authenticator from './components/auth/Authenticator.jsx'
import Home from './Home'
import Form from './components/form/Form.jsx'
import ViewRecord from './components/ViewRecords.jsx'
import Signup from './components/auth/signup/Signup.jsx'

class PrivateRoute extends React.Component {
  state = {
    loaded: false,
    isAuthenticated: false,
    user: {}
  }
  componentDidMount() {
    this.authenticate()
    this.unlisten = this.props.history.listen(() => {
      Auth.currentAuthenticatedUser()
        .then(user => console.log('user: ', user))
        .catch(() => {
          if (this.state.isAuthenticated) this.setState({ isAuthenticated: false })
        })
    });
  }
  componentWillUnmount() {
    this.unlisten()
  }
  authenticate() {
    Auth.currentSession()
      .then(session => {

        console.log("Session");
        console.log(session);

        this.setState({ loaded: true, isAuthenticated: true, user: session.getIdToken().payload })
      })
      .catch(() => this.props.history.push('/auth'))
  }
  render() {
    const { component: Component, ...rest } = this.props
    const { loaded , isAuthenticated} = this.state

    console.log(isAuthenticated)
    if (!loaded) return null
    return (
      <Route
        {...rest}
        render={props => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth",
              }}
            />
          )
        }}
      />
    )
  }
}

PrivateRoute = withRouter(PrivateRoute)

const Routes = () => (
  
  <Router>
    <Switch>
      <Route path='/auth' component={Authenticator} />
      <Route path='/sign-up' component={Signup} />
      <PrivateRoute path='/new-application' component={Form} />
      <PrivateRoute path='/get-entries' component={ViewRecord} />
      <PrivateRoute path='/' component={Home} />
    </Switch>
  </Router>
)

export default Routes

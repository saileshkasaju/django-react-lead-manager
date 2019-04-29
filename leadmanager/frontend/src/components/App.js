import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as AlerProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import PrivateRoute from './common/PrivateRoute'
import configureStore from '../redux/configureStore'
import Header from './layout/Header'
import Alerts from './layout/Alerts'
import Dashboard from './leads/Dashboard'
import Register from './accounts/Register'
import Login from './accounts/Login'

import { loadUser } from '../redux/actions/authActions'

const store = configureStore()

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
}

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <ReduxProvider store={store}>
        <AlerProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </>
          </Router>
        </AlerProvider>
      </ReduxProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

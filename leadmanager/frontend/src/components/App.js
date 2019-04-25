import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as AlerProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import configureStore from '../redux/configureStore'
import Header from './layout/Header'
import Alerts from './layout/Alerts'
import Dashboard from './leads/Dashboard'

const store = configureStore()

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
}

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <AlerProvider template={AlertTemplate} {...alertOptions}>
          <>
            <Header />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </>
        </AlerProvider>
      </ReduxProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

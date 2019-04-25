import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from '../redux/configureStore'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </ReduxProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

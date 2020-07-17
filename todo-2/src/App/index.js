import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TodosApp from './TodosApp'

import store from 'store'

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={TodosApp} />
    </Router>
  </Provider>
)

export default App

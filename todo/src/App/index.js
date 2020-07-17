import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'
import AddTodo from 'Components/AddTodo'
import TodoList from 'Components/TodoList'
import Footer from 'Components/Footer'

const App = () => (
  <Provider store={store}>
    <AddTodo />
    <TodoList />
    <Footer />
  </Provider>
)

export default App

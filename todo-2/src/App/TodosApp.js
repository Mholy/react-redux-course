import React from 'react'

import AddTodo from 'Components/AddTodo'
import VisibleTodoList from 'Components/VisibleTodoList'
import Footer from 'Components/Footer'

const TodosApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodosApp

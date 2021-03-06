import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TodoList from './TodoList'
import FetchError from './FetchError'

import * as actions from 'actions'
import { getVisibleTodos, getIsFetching, getErrorMessage } from 'reducers'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
  }

  render() {
    const { toggleTodo, todos, isFetching, errorMessage } = this.props

    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      )
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />
  }
}

/** Redux `connect` state callback
 * It has current Redux `state` and also React Router props
 * It should return props to component based on Redux state
 * It uses Reducers selector functions to get props
 * It also uses React Router `match.params` object to get defined optional URL parameter `filter`
 */
const mapStateToTodoListProps = (state, { match }) => {
  const filter = match.params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter,
  }
}

/** Redux `connect` function
 * It gets current store state in the first argument,
 * and it gets dispatch in the second argument
 *
 * It pass getted state and dispatch props to the component
 */
VisibleTodoList = withRouter(
  connect(mapStateToTodoListProps, actions)(VisibleTodoList)
)

export default VisibleTodoList

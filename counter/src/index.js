import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

const rootElement = document.getElementById('root')

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  )
}

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
        store.dispatch({ type: 'INCREMENT' })
      }}
      onDecrement={() => {
        store.dispatch({ type: 'DECREMENT' })
      }}
    />,
    rootElement
  )
}

store.subscribe(render)
render()

# React Redux Todo

React Redux Todo app which has a state controlled by Redux.

App composed from:

- Presentational components:
  - Field to adding a todo
  - Todos list
  - Footer with filter buttons
- Redux store which has two reducers:
  - todos
  - visibilityFilter
- Redux actions:
  - to adding todo
  - to toggling todo
  - to toggling vibility filter
- Presentational component, which should update app state, connects to the store state and actions
- In the result app provides:
  - view of todos list, which is empty by default
  - field to add a new todo in the todos list
  - filter buttons to update view of todos list

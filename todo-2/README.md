# React Redux Todo 2

App composed from:

- Presentational components:
  - Field to adding a todo
  - Todos list
  - Footer with filter links
  - Error message to show, when API response not resolved correctly
- Fake API calls, which returns/updates app data with Promises
- React Router, which manages todos visibility filter by URL parameter
- Redux store, which has middlewares, reducers and reducers selector functions:
  - Middlewares:
    - `redux-logger` - to log action dispatches
    - `redux-thunk` - to manage async action dispatches
  - Reducers:
    - byId, where todos combined in the object by todos IDs
    - listByFilter, where todos combined by filter fields. Every listByFilter has following reducers:
      - ids with array of todos ids, that belongs to corresponging listByFilter
      - isFetching which indicates, that corresponging listByFilter is fetching data
      - errorMessage which indicates, that data fetching of corresponging listByFilter failed
- Redux actions, which calls dispatch, when API Promise resolved:
  - to fetch todos, based on React Router filter. Also it calls dispatch to update isFetching reducer before API call
  - to toggling todo
  - to toggling vibility filter
- Presentational component, which should update app state, connects to the store state and actions. Filter links uses React Router API.
- In the result app provides:
  - view of todos list which is fetched from fake API asyncroniously
  - field to add a new todo in the todos list by send it to fake API
  - filter links to update view of todos list based on URL params

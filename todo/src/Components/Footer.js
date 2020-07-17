import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from 'actions'

const Link = ({ active, children, onClick }) => (
  <button
    onClick={() => {
      onClick()
    }}
    disabled={active}
    type="button"
  >
    {children}
  </button>
)

const mapStateToLinkProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
})
const mapDispatchToLinkProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  },
})
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link)

const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
)

export default Footer

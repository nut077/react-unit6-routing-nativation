import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  getContext
} from 'recompose'

const Route = ({locationPath, path, component}) => (
  locationPath === path && (
    React.createElement(component)
  )
);

export default compose(
  getContext({
    locationPath: PropTypes.string.isRequired
  })
)(Route)
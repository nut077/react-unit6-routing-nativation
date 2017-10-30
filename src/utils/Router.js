import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  withHandlers,
  withContext,
  withState
} from 'recompose'

const Router = ({children}) => (
  <span>{children}</span>
);

export default compose(
  withState('locationPath', 'setLocationPath', ''),
  withHandlers({
    onPathChange: ({setLocationPath}) => (path) => {
      window.history.pushState(null, '', path);
      setLocationPath(window.location.pathname);
    }
  }),
  withContext(
    {onPathChange: PropTypes.func.isRequired},
    ({onPathChange}) => ({onPathChange})
  ),
  withContext(
    {locationPath: PropTypes.string.isRequired},
    ({locationPath}) => ({locationPath})
  )
)(Router)
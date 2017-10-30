import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  compose,
  getContext,
  setPropTypes,
  withHandlers,
  defaultProps
} from 'recompose'

const Link = (
  {
    path,
    className,
    children,
    onPathChange,
    locationPath,
    handleClick,
    getClassname,
    cursorPointer
  }) => (
  <a
    className={getClassname(path, locationPath, className)}
    style={cursorPointer}
    onClick={handleClick(path, onPathChange)}
  >{children}</a>
);

export default compose(
  defaultProps({
    cursorPointer: {cursor: 'pointer'}
  }),
  setPropTypes({
    path: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node
  }),
  withHandlers({
    handleClick: _ => (path, onPathChange) => {
      return () => onPathChange(path)
    },
    getClassname: _ => (path, locationPath, classname) => (
      classNames(classname, {
        active: path === locationPath
      })
    )
  }),
  getContext({
    onPathChange: PropTypes.func.isRequired,
    locationPath: PropTypes.string.isRequired
  })
)(Link)
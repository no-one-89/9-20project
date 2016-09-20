import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
      <div className="nav-header">
        <p><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>Back</p>
        <h3>徐欢@Home</h3>
        <span className="glyphicon glyphicon-tasks" aria-hidden="true"></span>
      </div>
    )
  }
}

export default NavHeader;

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link activeClassName="footer-active" to="/" onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br/>Home</Link>
        <Link activeClassName="footer-active" to="/work"><span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span><br/>Work</Link>
        <Link activeClassName="footer-active" to="/blog"><span className="glyphicon glyphicon-king" aria-hidden="true"></span><br/>Blog</Link>
        <Link activeClassName="footer-active" to="/about"><span className="glyphicon glyphicon-user" aria-hidden="true"></span><br/>About</Link>

      </div>
    )

  }
}

export default NavFooter;

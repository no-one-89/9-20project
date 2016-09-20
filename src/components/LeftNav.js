import React, { PropTypes } from 'react'
import { Link } from 'react-router'


class leftNav extends React.Component {
  render () {
    return(
      <div className="left-nav">
        <h3>徐欢@Home</h3>
        <Link activeClassName="left-active" to="/" onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
        <Link activeClassName="left-active" to="/work"><span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>Work</Link>
        <Link activeClassName="left-active" to="/blog"><span className="glyphicon glyphicon-king" aria-hidden="true"></span>Blog</Link>
        <Link activeClassName="left-active" to="/about"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>About</Link>

      </div>
    )

  }
}

export default leftNav;

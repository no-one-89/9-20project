import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  handleClick(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className="nav-header">
        <p onClick={this.handleClick.bind(this)}><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>Back</p>
        <h3>徐欢@{this.props.title}</h3>
        <span className="glyphicon glyphicon-tasks" aria-hidden="true"></span>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default NavHeader;

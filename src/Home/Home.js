import React from 'react'
import { hashHistory } from 'react-router'
class Home extends React.Component {
  handleClick(){
    hashHistory.push('about')
  }
  render () {
    return(
      <div className="home-container modbr">
        <div className="home-cover">
          <h2><span>Welcome</span> to my homepage!</h2>
          <p>I'm a developer!bingo!</p>
          <span onClick={this.handleClick.bind(this)}>Connect Me</span>
        </div>
      </div>
    )
  }
}

export default  Home;

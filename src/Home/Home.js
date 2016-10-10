import React from 'react'
import { hashHistory } from 'react-router'
class Home extends React.Component {
  handleClick(){
    hashHistory.push('about')
  }
  render () {
    return(
      <div className="home-container modbr">
        <video autoPlay loop poster="../sources/11.png" id="bgvid">
          <source src="https://s3.amazonaws.com/cloudways-website-videos/2016-home-v3.mp4" type="video/mp4" />
        </video>
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

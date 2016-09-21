import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';
import './main.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showNav:false
    }
  }
  changeNavbar(){
    this.setState({
      showNav:window.innerWidth > 760 ? false : true
    })
  }
  componentDidMount(){
   this.changeNavbar();
   window.onresize = this.changeNavbar.bind(this)
  }
  render () {
    return(
      <div className="mycontainer">
        {this.state.showNav ? <NavHeader /> : <LeftNav />}
          <div className="content-main">
            {this.props.children}
          </div>
        {this.state.showNav ? <NavFooter /> : null}

      </div>
    )
  }
}

export default App;

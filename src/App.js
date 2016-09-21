import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';
import './main.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showNav:false,
      title:'Home'
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
  componentWillReceiveProps(){
     this.changeTitle();
   }
   componentWillMount(){
     this.changeTitle();
   }
  changeTitle(){
    this.setState({
      title:this.context.router.isActive('/',true) ? 'Home' :
            this.context.router.isActive('/work') ? 'Work' :
            this.context.router.isActive('/blog') ? 'Blog' :
            this.context.router.isActive('/about') ? 'About' : ''
    })
  }
  render () {
    return(
      <div className="mycontainer">
        {this.state.showNav ? <NavHeader /> : <LeftNav title={this.state.title}/>}
          <div className="content-main">
            {this.props.children}
          </div>
        {this.state.showNav ? <NavFooter title={this.state.title}/> : null}

      </div>
    )
  }
}
App.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default App;

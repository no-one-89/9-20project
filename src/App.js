import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import './main.css';

class App extends React.Component {
  render () {
    return(
      <div className="mycontainer">
          <NavHeader />
          <div className="content-main">
            {this.props.children}
          </div>
          <NavFooter />
      </div>
    )
  }
}

export default App;

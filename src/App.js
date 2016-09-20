import React from 'react';

class App extends React.Component {
  render () {
    return(
      <div>
          APP页面
          {this.props.children}
      </div>
    )
  }
}

export default App;

import React from 'react';
import { Router, Route,IndexRoute,hashHistory } from 'react-router';
import App from './App';
import About from './About/About';
import Work from './Work/Work';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import BlogItem from './Blog/BlogItem';


class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/blog" component={Blog} />
          <Route path="/item/:url" component={BlogItem} />
        </Route>
      </Router>
    )
  }
}

export  default Routers;

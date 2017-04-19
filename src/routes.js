import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Homepage from './components/pages/Homepage';
import ArticlePage from './components/pages/ArticlePage';


class Routes extends Component {
  render () {
    return (
      <Router>
        <Route path='/' component={App} >
          <Route path='home' component={Homepage} />
          <Route path='article/:id' component={ArticlePage} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
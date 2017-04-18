import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './src/App';
import Homepage from './src/components/pages/Homepage';
import ArticlePage from './src/components/pages/ArticlePage';


class Routes extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App} >
          <Route path='home' component={Homepage} />
          <Route path='article/:id' component={ArticlePage} />
        </Route>
      </Router>
    )
  }
}
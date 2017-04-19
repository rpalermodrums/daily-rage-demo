import React, { Component } from 'react';
import './App.css';

import Homepage from './components/pages/Homepage';
import MillenialArticlePage from './components/pages/MillenialArticlePage';
import PlantationArticlePage from './components/pages/PlantationArticlePage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ink-grid">
          <div >
          <header className="vertical-space">
            <h1 className='site-title'>DAILY RAGE
              {/*<small>Some tag line</small>*/}
            </h1>
            <nav className="ink-navigation">
              <ul className="menu horizontal red">
                <li className="active"><a href="/">Home</a></li>
              </ul>
            </nav>
          </header>
            <Route exact path='/' component={Homepage} />
            <Route path='/articles/millenials' component={MillenialArticlePage} />
            <Route path='/articles/plantation' component={PlantationArticlePage} />

        </div>

          <footer className="clearfix">
            <div className="ink-grid">
              <ul className="unstyled inline half-vertical-space">
                <li className="active"><a href="#">About</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
              <p className="note">Identification of the owner of the copyright, either by name, abbreviation, or other designation by which it is generally known.</p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Homepage from './components/pages/Homepage';
import ArticlePage from './components/pages/ArticlePage';

class App extends Component {
  render() {
    return (
      <div className="ink-grid">
        <div >
        <header className="vertical-space">
          <h1>Daily Rage<small>Some tag line</small></h1>
          <nav className="ink-navigation">
            <ul className="menu horizontal black">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">item</a></li>
              <li><a href="#">item</a></li>
            </ul>
          </nav>
        </header>
          <Homepage />
          {/*<ArticlePage />*/}
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
    );
  }
}

export default App;

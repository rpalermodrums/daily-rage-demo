import React, { Component } from 'react';

import './App.css';

import Homepage from './components/pages/Homepage';
import MillenialArticlePage from './components/pages/MillenialArticlePage';
import PlantationArticlePage from './components/pages/PlantationArticlePage';
import GenderArticlePage from './components/pages/GenderArticlePage';
import WifiArticlePage from './components/pages/WifiArticlePage';
import WhiteNationalistArticlePage from './components/pages/WhiteNationalistArticlePage';
import GamestopArticlePage from './components/pages/GamestopArticlePage';
import InternArticlePage from './components/pages/InternArticlePage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
          <Route path='/articles/gender' component={GenderArticlePage} />
          <Route path='/articles/wifi' component={WifiArticlePage} />
          <Route path='/articles/white-nationalist' component={WhiteNationalistArticlePage} />
          <Route path='/articles/gamestop' component={GamestopArticlePage} />
          <Route path='/articles/intern' component={InternArticlePage} />
          {/*<button><i href="#" className="fa fa-facebook"></i></button>*/}
          {/*<button><i href="#" className="fa fa-twitter"></i></button>*/}
        </div>
      </Router>
    );
  }
}

export default App;

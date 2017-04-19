import React, {Component} from 'react';

class Homepage extends Component {
  render () {
    return (
      <div>
        {/*<section className="pub hide-all show-large show-xlarge xlarge-push-right large-push-right">*/}

        {/*</section>*/}

        <section className="highlight">
          <div className="highlight-wrapper">
            <div className="column-group gutters">
              <div className="xlarge-60 large-60 medium-50 small-100 tiny-100">
                <div className="image">
                  <a href="/articles/millenials"><img alt='' src={require("./images/pampered-millennial.jpg")} /></a>
                </div>
              </div>
              <div className="xlarge-40 large-40 medium-50 small-100 tiny-100">
                <h2>Pampered Millennial Feels Entitled To Non-Demagogue President</h2>
              </div>
            </div>
            <div className="column-group gutters">
              <div className="all-50 small-100 tiny-100">
                <a href="articles/white-nationalist"><img src={require("./images/trump-white-nationalist.jpg")} alt="" height={315} /></a>
                TRUMP: "NO I AM NOT A WHITE NATIONALIST. WAIT, WHAT'S WHITE NATIONALISM? OH, IN THAT CASE I'M TOTALLY IN FAVOR OF IT."
              </div>
              <div className="all-50 small-100 tiny-100">
                <a href="/articles/plantation"><img alt='' src={require("./images/trump-plantation.jpg")} height={315} /></a>
                TRUMP ANNOUNCES UNPAID JOBS PLAN ON SOUTHERN PLANTATIONS
              </div>
            </div>
            <div className="column-group gutters">
              <div className="all-33 small-100 tiny-100">
                <img alt='' src={require("./images/gun-owner.png")} height={230} />
                HEROIC GUN OWNER SHOOTS MAN WHO HYPOTHETICALLY COULD HAVE BURGLARIZED HIM
              </div>
              <div className="all-33 small-100 tiny-100">
                <a href="articles/gamestop"><img src={require("./images/Gamestop.jpg")} alt="" height={230}  /></a>
                GOVERNMENT SHOULD RUN LIKE A BUSINESS, SPECIFICALLY GAMESTOP
              </div>
              <div className="all-33 small-100 tiny-100">
                <a href="/articles/intern"><img alt='' src={require("./images/Brian.jpeg")} height={230} /></a>
                TRUMP ACHIEVES MAJOR VICTORY AS MEXICAN PRESIDENT CONTRIBUTES UNPAID INTERN TO BORDER WALL
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Homepage;

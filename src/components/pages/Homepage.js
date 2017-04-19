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
                <p>"Red is not the right word," was the reply. "The plague was scarlet.  The whole face and body turned scarlet in an hour's time. Don't I  know? Didn't I see enough of it? And I am telling you it was scarlet  because&mdash;well, because it was scarlet. There is no other word for it."</p>
              </div>
            </div>
            <div className="column-group gutters">
              <div className="all-50 small-100 tiny-100">
                <img alt='' src={require("./images/Gamestop.jpg")} height={315} />
                GOVERNMENT SHOULD RUN LIKE A BUSINESS, SPECIFICALLY GAMESTOP
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
                <img alt='' src={require("./images/syria-strike.jpg")} height={230} />
                TRUMP SCORES MAJOR VICTORY AS MEXICO CONTRIBUTES UNPAID INTERN TO BORDER WALL

              </div>
              <div className="all-33 small-100 tiny-100">
                <img alt='' src={require("./images/not-a-racist.jpg")} height={230} />
                I'M AFRAID OF BROWN PEOPLE, AND I'M TIRED OF BEING CALLED A RACIST FOR THAT
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Homepage;

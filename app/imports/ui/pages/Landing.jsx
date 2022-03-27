import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <main id="main">
        <section id="section1">
          <div className="gap">
            <div className="wrap">
              <div className="slide-container">
                <div className="slide-view">
                  <div className="slide-wrap">
                    <li className="slide slide3">
                      <div className="title-box">
                        <div className="title3">
                          <h3>Let&apos;s share various weaning stories in our neighborhood</h3>
                          <h2>NEIGHBORHOOD LIFE<br/>WITH NEIGHBORS</h2>
                        </div>
                        {Meteor.userId() === null && <Link to="/signup">
                          <Button to="/signup" className="btn">Sign Up</Button>
                        </Link>}
                      </div>
                    </li>
                    <li className="slide slide1">
                      <div className="title-box">
                        <div className="title">
                          <h3>Experience close and warm deals with local residents now</h3>
                          <h2>SECOND-HAND<br/>MARKET</h2>
                        </div>
                        {Meteor.userId() === null && <Link to="/signup">
                          <Button to="/signup" className="btn">Sign Up</Button>
                        </Link>}
                      </div>
                    </li>
                    <li className="slide slide2">
                      <div className="title-box">
                        <div className="title2">
                          <h3>From second-hand deals to neighborhood information, with your neighbors</h3>
                          <h2>HANA MARKET<br/>NEAR YOU</h2>
                        </div>
                        {Meteor.userId() === null && <Link to="/signup">
                          <Button to="/signup" className="btn">Sign Up</Button>
                        </Link>}
                      </div>
                    </li>
                    <li className="slide slide3">
                      <div className="title-box">
                        <div className="title3">
                          <h3>Let&apos;s share various weaning stories in our neighborhood</h3>
                          <h2>NEIGHBORHOOD LIFE<br/>WITH NEIGHBORS</h2>
                        </div>
                        {Meteor.userId() === null && <Link to="/signup">
                          <Button to="/signup" className="btn">Sign Up</Button>
                        </Link>}
                      </div>
                    </li>
                    <li className="slide slide1">
                      <div className="title-box">
                        <div className="title">
                          <h3>Experience close and warm deals with local residents now</h3>
                          <h2>SECOND-HAND<br/>MARKET</h2>
                        </div>
                        {Meteor.userId() === null && <Link to="/signup">
                          <Button to="/signup" className="btn">Sign Up</Button>
                        </Link>}
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Landing;

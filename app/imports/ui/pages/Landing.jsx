import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
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
        <section id="section2">
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="title">
                  <h2>ABOUT HANA MARKET</h2>
                  <h3>
                    HANA MARKET is a web application featuring a local living community <br/>
                    where neighbors come together from second-hand deals to neighborhood information. <br/>
                    Through this, users can create a warm and friendly life with local residents. <br/>
                  </h3>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <div className="column-gap">
                        <div className="column-wrap">
                          <div className="img-box">
                            <img src="./images/sale.jpg" alt=""/>
                          </div>
                          <div className="text-box">
                            <div className="text-gap">
                              <div className="text-content">
                                <h4>Second-hand sale</h4>
                                <p>You can check what items are on sale. When you want to buy something you need, you can quickly
                                  trade with your neighbors in the neighborhood.</p>
                                <span className="icon-style"><Link to="/list">VIEW ALL PRODUCT<Icon className="icon" name="arrow right"/></Link></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="column-gap">
                        <div className="column-wrap">
                          <div className="img-box">
                            <img src="./images/latest-blog5.jpg" alt=""/>
                          </div>
                          <div className="text-box">
                            <div className="text-gap">
                              <div className="text-content">
                                <h4>Sell your own item</h4>
                                <p>Upload and sell items you no longer use or need directly to your neighbors.
                                  When the transaction is complete, change the status of the post to &apos;sold out&apos;.</p>
                                <span className="icon-style"><Link to="/addItem">ADD YOUR PRODUCT<Icon className="icon" name="arrow right"/></Link></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="column-gap">
                        <div className="column-wrap">
                          <div className="img-box">
                            <img src="./images/community.jpg" alt=""/>
                          </div>
                          <div className="text-box">
                            <div className="text-gap">
                              <div className="text-content">
                                <h4>Communicate with the locals</h4>
                                <p>In the HANA market, you can meet each other through the community as well as second-hand transactions.
                                  You can share various life information.</p>
                                <span className="icon-style"><Link to="/viewPost">GO TO COMMUNITY<Icon className="icon" name="arrow right"/></Link></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
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

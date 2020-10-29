import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <div className="campaign-detail">
      <main id="main" className="site-main">
        <div className="page-title background-campaign">
          <div className="container">
            <h1>The Oreous Pillow</h1>
            <div className="breadcrumbs">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                  <span>/</span>
                </li>
                <li>The Oreous Pillow</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="campaign-content">
          <div className="container">
            <div className="campaign">
              <div className="campaign-item clearfix">
                <div className="campaign-image">
                  <div className="item">
                    <img src={require('src/images/placeholder/570x400.png')} alt="" />
                  </div>
                </div>
                <div className="campaign-box">
                  <Link to="/" className="category">
                    Crafts
                  </Link>
                  <h3>The Oreous Pillow</h3>
                  <div className="campaign-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor, ipsum
                      ut mattis commodo, eros justo feugiat ante, sed tristique erat urna et nibh.
                      Donec nec rhoncus mi, non laoreet tortor. Proin ullamcorper ipsum interdum
                      tellus scelerisque, a ultricies urna vehicula. Mauris faucibus metus quis
                      commodo pharetra.
                    </p>
                  </div>
                  <div className="campaign-author clearfix">
                    <div className="author-profile">
                      <Link className="author-icon" to="/">
                        <img src={require('src/images/placeholder/35x35.png')} alt="" />
                      </Link>
                      by{' '}
                      <Link className="author-name" to="/">
                        Andrew Noah
                      </Link>
                    </div>
                    <div className="author-address">
                      <span className="ion-location" />
                      Melbourne, Victoria, AU
                    </div>
                  </div>
                  <div className="process">
                    <div className="raised">
                      <span />
                    </div>
                    <div className="process-info">
                      <div className="process-funded">
                        <span>$10000</span>funding goal
                      </div>
                      <div className="process-pledged">
                        <span>$8100</span>pledged
                      </div>
                      <div className="process-time">
                        <span>37</span>backers
                      </div>
                      <div className="process-time">
                        <span>23</span>days ago
                      </div>
                    </div>
                  </div>
                  <div className="button">
                    <form action="#" id="priceForm" className="campaign-price quantity">
                      <input type="number" value="1" min="0" name="s" placeholder="" />
                      <button className="btn-primary" type="submit">
                        Back this Campaign
                      </button>
                    </form>
                    <Link to="/" className="btn-secondary">
                      <i className="fa fa-heart" aria-hidden="true" />
                      Remind me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="campaign-history">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="campaign-tabs">
                  <ul className="tabs-controls">
                    <li className="active" data-tab="campaign">
                      <Link to="/">Campaign Story</Link>
                    </li>
                    <li data-tab="backer">
                      <Link to="/">Backer List</Link>
                    </li>
                    <li data-tab="faq">
                      <Link to="/">FAQ</Link>
                    </li>
                    <li data-tab="updates">
                      <Link to="/">Updates</Link>
                    </li>
                    <li data-tab="comment">
                      <Link to="/">Comments</Link>
                    </li>
                  </ul>
                  <div className="campaign-content">
                    <div id="campaign" className="tabs active">
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      </p>
                      <img src={require('src/images/placeholder/770x430.png')} alt="" />
                      <p>
                        A wonderful serenity has taken possession of my entire soul, like these
                        sweet mornings of spring which I enjoy with my whole heart. I am alone, and
                        feel the charm of existence in this spot, which was created for the bliss of
                        souls like mine. I am so happy, my dear friend, so absorbed in the exquisite
                        sense of mere tranquil existence, that I neglect my talents. I should be
                        incapable of drawing a single stroke at the present moment.
                      </p>
                      <p>
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself
                        transformed in his bed into a horrible vermin. He lay on his armour-like
                        back, and if he lifted his head a little he could see his brown belly,
                        slightly domed and divided by arches into stiff sections. The bedding was
                        hardly able to cover it and seemed ready to slide off any moment. His many
                        legs, pitifully thin compared with the size of the rest of him, waved
                      </p>
                    </div>
                    <div id="backer" className="tabs">
                      <table>
                        <tr>
                          <th>Name</th>
                          <th>Donate Amount</th>
                          <th>Date</th>
                        </tr>
                        <tr>
                          <td>Andrew</td>
                          <td>$100</td>
                          <td>June 25, 2017</td>
                        </tr>
                        <tr>
                          <td>Andrew</td>
                          <td>$60</td>
                          <td>December 25, 2017</td>
                        </tr>
                        <tr>
                          <td>Andrew</td>
                          <td>$70</td>
                          <td>November 25, 2017</td>
                        </tr>
                        <tr>
                          <td>Andrew</td>
                          <td>$90</td>
                          <td>February 25, 2017</td>
                        </tr>
                        <tr>
                          <td>Andrew</td>
                          <td>$30</td>
                          <td>January 25, 2017</td>
                        </tr>
                        <tr>
                          <td>Andrew</td>
                          <td>$80</td>
                          <td>June 15, 2017</td>
                        </tr>
                      </table>
                    </div>
                    <div id="faq" className="tabs">
                      <h2>Frequently Asked Questions</h2>
                      <p>
                        Looks like there aren`t any frequently asked questions yet. Ask the project
                        creator directly.
                      </p>
                      <Link to="/" className="btn-primary">
                        Ask a question
                      </Link>
                    </div>
                    <div id="updates" className="tabs">
                      <ul>
                        <li>
                          <p className="date">30-06-2017</p>
                          <h3>New Project Launches in Bangalore</h3>
                          <div className="desc">
                            <p>
                              Bacon spare ribs rump chuck turkey, ham hock capicola. Strip steak
                              tongue kielbasa, boudin hamburger t-bone capicola turducken.
                              Landjaeger meatloaf pork belly spare ribs chuck.
                            </p>
                          </div>
                        </li>
                        <li>
                          <p className="date">31-05-2018</p>
                          <h3>Our First Office Start</h3>
                          <div className="desc">
                            <p>
                              Corned beef leberkas fatback porchetta, strip steak salami turkey
                              short loin flank ham hock landjaeger. Leberkas pork belly kevin
                              shoulder filet mignon. Bacon spare ribs rump chuck turkey, ham hock
                              capicola. Strip steak tongue kielbasa, boudin hamburger t-bone
                              capicola turducken. Landjaeger meatloaf pork belly spare ribs chuck.
                            </p>
                          </div>
                        </li>
                        <li>
                          <p className="date">31-05-2018</p>
                          <h3>We Touch the Million Dollar Milestone</h3>
                          <div className="desc">
                            <p>
                              Corned beef leberkas fatback porchetta, strip steak salami turkey
                              short loin flank ham hock landjaeger. Leberkas pork belly kevin
                              shoulder filet mignon. Bacon spare ribs rump chuck turkey, ham hock
                              capicola. Strip steak tongue kielbasa, boudin hamburger t-bone
                              capicola turducken. Landjaeger meatloaf pork belly spare ribs chuck.
                            </p>
                          </div>
                        </li>
                        <li>
                          <p className="date">31-05-2018</p>
                          <h3>Our Employee Reach 100 Person</h3>
                          <div className="desc">
                            <p>
                              Sed cursus hendrerit odio, at aliquet leo hendrerit a. Nulla ultricies
                              sagittis dolor, quis maximus magna consectetur eu. Cras pharetra
                              aliquam fringilla. Integer placerat sapien dapibus varius luctus.
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                              aliquam urna, ultrices lobortis lacus. Praesent mi enim, congue semper
                              volutpat ut, bibendum tempor arcu.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div id="comment" className="tabs comment-area">
                      <h3 className="comments-title">1 Comment</h3>
                      <ol className="comments-list">
                        <li className="comment clearfix">
                          <div className="comment-body">
                            <div className="comment-avatar">
                              <img src={require('src/images/placeholder/70x70.png')} alt="" />
                            </div>
                            <div className="comment-info">
                              <header className="comment-meta" />
                              <cite className="comment-author">Jordan B. Goodale</cite>
                              <div className="comment-inline">
                                <span className="comment-date">2 days ago</span>
                                <Link to="/" className="comment-reply">
                                  Reply
                                </Link>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Equidem e
                                  Cn. Sequitur disserendi ratio cognitioque naturae; Nunc vides,
                                  quid faciat. Duo Reges: constructio interrete. Memini vero,
                                  inquam; Quis Aristidem non mortuum diligit?
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ol>
                      <div id="respond" className="comment-respond">
                        <h3 id="reply-title" className="comment-reply-title">
                          Leave A Comment?
                        </h3>
                        <form action="#" id="commentForm">
                          <div className="field-textarea">
                            <textarea rows="8" placeholder="Your Comment" />
                          </div>
                          <div className="row">
                            <div className="col-md-4 field">
                              <input type="text" value="" name="s" placeholder="Your Name" />
                            </div>
                            <div className="col-md-4 field">
                              <input type="text" value="" name="s" placeholder="Your Email" />
                            </div>
                            <div className="col-md-4 field">
                              <input type="text" value="" name="s" placeholder="Website" />
                            </div>
                          </div>
                          <button type="submit" value="Send Messager" className="btn-primary">
                            Post Comment
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="support support-campaign">
                  <h3 className="support-campaign-title">Back this Campaign</h3>
                  <div className="plan">
                    <Link to="/">
                      <h4>Pledge $100 - $200</h4>
                      <div className="plan-desc">
                        <p>
                          But I must explain to you how all this mistaken idea of denouncing
                          pleasure and praising pain was born and I will give you a complete account
                          of the system, and expound the actual teachings of the great explorer of
                          the truth, the master builder of human happiness.
                        </p>
                      </div>
                      <div className="plan-date">May, 2017</div>
                      <div className="plan-author">Estimated Delivery</div>
                      <div className="backer">2 backer</div>
                    </Link>
                  </div>
                  <div className="plan">
                    <Link to="/">
                      <h4>Pledge $200 - $300</h4>
                      <div className="plan-desc">
                        <p>
                          No one rejects, dislikes, or avoids pleasure itself, because it is
                          pleasure, but because those who do not know how to pursue pleasure
                          rationally encounter consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain pain of itself
                        </p>
                      </div>
                      <div className="plan-date">May, 2017</div>
                      <div className="plan-author">Estimated Delivery</div>
                      <div className="backer">35 backer</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Detail;

import React from "react";

export default function Contact() {
  return (
    <div className="container-fluid mt-5">
      <div className="footer_section " id="contact">
        <div className="container">
          <section className="main-section contact" id="contact">
          <div className="contact_section">
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className="contact-info-box address clearfix">
                  <h2>Contact Us</h2>
                  <p>
                  Industries don’t get required labors on the right time, costing them lot of money since the project gets delayed. These are skilled labor who work on daily wages These could be any field like construction, manufacturing industries , road - pwd , agriculture For the workers, since they work on daily wages , even a day of missed job can impact their daily meal . A platform where they can put their availability and for industries to hire these labors would create a bridge for the gap
                  </p>
                  <p>If any suggestions or tips let us know</p>
                </div>
                <ul className="social-link">
                  <li >
                    <a href="(0)">
                      <i className="fa fa-twitter "></i>
                    </a>
                  </li>
                  <li className="facebook animated bounceIn wow delay-03s animated">
                    <a href="(0)">
                      <i className="fa fa-facebook "></i>
                    </a>
                  </li>
                  <li className="pinterest animated bounceIn wow delay-04s animated">
                    <a href="(0)">
                      <i className="fa fa-pinterest "></i>
                    </a>
                  </li>
                  <li className="dribbble animated bounceIn wow delay-06s animated">
                    <a href="(0)">
                      <i className="fa fa-instagram "></i>
                    </a>
                  </li>
               
                
                </ul>
              </div>
              <div className="col-lg-6 wow fadeInUp delay-06s animated">
                <div className="form">
                  <div id="sendmessage">
                    Sent Message Thank you!
                  </div>
                  <div id="errormessage"></div>
                  <form
                    action=""
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control input-text"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control input-text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>

                    <button type="submit" className="btn input-btn">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
              
            </div>
      
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

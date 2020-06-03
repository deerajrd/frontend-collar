import React, { Component, Fragment } from "react";
import img1 from '../../assets/background2.jpg';
import img2 from '../../assets/center.jpg';
import img3 from '../../assets/industry.jpg';
import img4 from '../../assets/ourevent1.jpg';
// import "../CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        
    
  
<div class="banner">
  <div>
  <section id="section1" className="" style={{ marginTop: 80 + "px" }}>
          
          
          <div className="rightside rollIn animated wow animated">
            <div className="container ">
           
            <h1>Connecting Blue Collar jobs With Industries</h1>
              <h4>We are Tech Innovation Network Platform trying to Connect Different Blue Collar jobs With Industry.</h4>
              <a href="/Home#product" className="btn btn-success welcome">
         Tell us More
              </a> &nbsp;
            
             
            </div>
          </div>

          <div className="leftside">
            
            <img
              src={img1}
              alt=""
            />
          </div>
       
        </section>
  </div>

</div>
 {/*  */}
 <section id="service">
          <div className="container">
            <h2 >About Us</h2>
            <div className="service_area">
              <div className="row">
              <div className="col-lg-12">
                  <div className="service_block about1">
              
                    <p className="animated zoomIn wow animated about1">
                    Industries don’t get required labors on the right time, costing them lot of money since the project gets delayed. These are skilled labor who work on daily wages These could be any field like construction, manufacturing industries , road - pwd , agriculture For the workers, since they work on daily wages , even a day of missed job can impact their daily meal . A platform where they can put their availability and for industries to hire these labors would create a bridge for the gap


                    </p>
                  </div>
                </div>
              
             
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/*  */}
        {/*  */}

      

        <section >
        <div className="row">
        <div className="col-lg-6 wow fadeInUp delay-06s animated">
                <div className="form">
               
            <img
              src={img2}
              alt=""
            />
        
                
                 
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className=" address clearfix address1">
                <div class="above-heading">Large Scale Industries</div>
                    <h2 class="basic-22"><i><b>Standard Industries</b></i>:Blue Collar Industry require more number of Employees and People</h2>
                    
                
                </div>
              
              </div>
          
              
            </div>
      
        </section>


        <section >
        <div className="row">
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className=" address clearfix address1">
                <h2>Working Environment Helps the Employees in the Industry</h2>
                        <p>This project will help the Center/Company and employees to post or publish Blue Collar jobs in the portal. </p>
                        <ul class="list-unstyled li-space-lg">
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Center/Company will add the details of the company in the portal through which category of blue collar employees is required </div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Employees can Get the details about the Company and Book the Appointment in the portal. </div>
                            </li>
                        </ul>
                
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
               
            <img
              src={img3}
              alt=""
            />
        
                
                 
                </div>
              </div>
              
            </div>
      
        </section>

        <section >
        <div className="row">
        <div className="col-lg-6 wow fadeInUp delay-06s animated">
                <div className="form">
               
            <img
              src={img4}
              alt=""
            />
        
                
                 
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className=" address clearfix address1">
                <div class="above-heading">Employees</div>
                    <h2 class="basic-22"><i><b>Technology</b></i>:Portfolio Of Blue Collar jobs And Services</h2>
                    
                
                </div>
              
              </div>
          
              
            </div>
      
        </section>
     
        {/*  */}
        {/*  */}
        {/*  */}

        <section >
        <div className="container-fluid mt-5">
      <div className="footer_section jumbotron back" id="contact">
        <div className="container">
          <section className=" contact" id="contact">
         
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className="contact-info-box address clearfix">
                  <h1>Contact Us</h1>
                  <p>
                  Industries don’t get required labors on the right time, costing them lot of money since the project gets delayed. These are skilled labor who work on daily wages These could be any field like construction, manufacturing industries , road - pwd , agriculture For the workers, since they work on daily wages , even a day of missed job can impact their daily meal . A platform where they can put their availability and for industries to hire these labors would create a bridge for the gap
                  </p>
                  <p>If any suggestions or tips let us know</p>
                </div>
                
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
      

          </section>
        </div>
      </div>
    </div>
</section>
        {/*  */}
        {/*  */}
      </Fragment>
    );
  }
}

export default Home;

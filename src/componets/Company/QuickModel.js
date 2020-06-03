import React, { Component } from "react";

export default class QuickModel extends Component {
  state = {
    center: [],
    category:[],
  };

  componentDidMount = (async) => {
    this.setState({ center: this.props.location.state.center });
    this.setState({ category: this.props.location.state.cat });
  };
  render() {
    console.log(this.state.category);
    const {
      category,
      Centername,
      CenterManagername,
      ccontact,
      address,
      candidatename,
      candidateaadhar,
      age,
      gender,
      contact,
      experience,
      salaryday,
      photo
    
    } = this.state.center;
    // console.log);
    return (
      <div>
        <section className="section-bg">
          <div id="portfolio  ">
            <div className="container mt-4  ">
              <div className="page-title text-center">
                <h1 className="text-dark">Centers</h1>

                <hr className="pg-titl-bdr-btm" />
              </div>

              <div className="" id="" style={{ opacity: 1 }}>
                {/*  */}
                <div className="container ">
                  <div className=" tabletrans ">
                    <div className="well">
                      {/* <div className="row mb-5"></div> */}
                      <div className="card">
                        <div className="container-fliud  ">
                          <div className="wrapper row mb-4">
                            <div className="preview col-md-6 mt-4">
                              <div className="preview-pic tab-content ">
                                <img
                                  src={photo}
                                  alt="img1"
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                            </div>
                            <div className="details col-md-6">
                              {/* <h3 className="product-title mb-5">
                                Doctor Deatail
                              </h3> */}
                              <h3 className="product-title mb-5"><b>CenterName:{ Centername}</b></h3>
                              <i>
                                <h4>Category:{this.state.category}</h4> 

                                <h4>CenterManagername:{CenterManagername}</h4>
                                <h4>Contact: {ccontact}</h4>
                                <h4>Address: {address}</h4>
                                <h4>CandidateName: { candidatename}</h4>
                                <h4>CandidateAdhar: { candidateaadhar}</h4>
                                <h4>Age: { age}</h4>
                                <h4>Gender: {gender}</h4>
                                <h4>Contact: {contact}</h4>
                                <h4>Experience: {experience}-Years</h4>
  
                                <h4>Salary/day: ₹{salaryday}</h4>
                              </i>
                              <div className="action ">
                                <button
                                  className="add-to-cart btn btn-warning"
                                  type="button"
                                >
                                  Hire>>
                                </button>
                                {/* <button
                                  className="like btn btn-default"
                                  type="button"
                                >
                                  <span className="fa fa-heart"></span>
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

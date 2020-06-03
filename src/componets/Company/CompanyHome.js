import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";
import ShowCenter from "./Showcenter";
import QuickModel from "./QuickModel";

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: "",
      center: "",
      category: "",
    };
    // this.onClickHandler = this.onClickHandler.bind(this);
  }
  componentDidMount = () => {
    // this.props.getCategory();
    this.props.getcenter();
    // this.setState({
    //   specialization: this.props.category,
    //   doctors: this.props.doctors,
    // });
  };
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

<section class="counts section-bg mt-5">
        <div className=" container-fluid mt-5" id="product">
          <h2> List Of Centers</h2>

          <div className="row">
          {this.props.center.map((center) => (
                <Fragment>
                  <ShowCenter
                    key={center._id}
                    center={center}
                    category={center.category.catname}
                  ></ShowCenter>
                  {/* <QuickModel
                    doc={doc}
                    key={doc._id}
                    specialization={doc.specialization}
                  ></QuickModel> */}
                </Fragment>
              ))}
          </div>
        </div>
        </section>
      </Fragment>
    );
  }
}

export default CompanyHome;

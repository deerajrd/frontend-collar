import React, { Component,Fragment } from "react";
import "../CSS/donor.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Showcenter extends Component {
  state = {
    center: [],
    category:"",
  };
  componentDidMount = () => {
    this.setState({
      center: this.props.center,
      category: this.props.category,
    });
  };
  
    
  // getcenter = async () => {
  //   const token = sessionStorage.getItem("token");

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const res = await axios.get(
  //       ` http://localhost:5000/api/v1/center/${this.props.location.state.user}`,
  //       config
  //     );
  //     this.setState({
  //       center:res.data.data,
  //     });
  //     console.log(res.data.data);
  //   } catch (err) {
  //     // console.log("Can't load the items");
  //   }
  // };
  // onDeleteUser = async (user, e) => {
  //   e.preventDefault();
  //   // console.log(user);
  //   const token = sessionStorage.getItem("token");
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     await axios.delete(
  //       `http://localhost:5000/api/v1/center/${user}`,
  //       config
  //     );

  //     alert("User Deleted");
  //   } catch (err) {
  //     console.log("Can't load the items");
  //   }
  // };
  render() {
    const { _id,Centername,category,CenterManagername,address} = this.state.center;
    return (
      <Fragment>
        <div
          className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated"
          key={_id}
        >
          <div className="product-top">
             {/* <img src={`${photo}`} className="img1" alt="" />  */}
             <img
                        src="https://cdn2.iconfinder.com/data/icons/start-business-management-4/512/38-512.png"
                        className="img1"
                        alt=""
                      />
            <div className="product-bottom text-center">
              <h3><b>CenterName:{Centername}</b></h3>
              <h4><b>Category:</b>{this.state.category}</h4>
              <h4><b>CenterLocation:</b>{address}</h4>
              {/* <h4><b>CandidateName:</b>{candidatename}</h4> */}
              {/* <h4> address</h4> */}
              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
                data-toggle="modal"
                data-target="#quickModel"
              >
                Book Appointment
              </button>
            </div>
            <div className="overlay">
              <Link
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
                to={{
                  pathname: "/Company/Showcenter",
                  state: {
                    center: this.state.center,
                    cat: this.state.category,
                  },
                }}
              >
                <i className="fa fa-eye"></i>
              </Link>

              {/* <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
                data-toggle=""
                data-target=""
              >
                <i className="fa fa-shopping-cart"></i>
              </button> */}
            </div>
          </div>
          <div className="product-bottom text-center"></div>
        </div>
      </Fragment> 
    );
  }
}

import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";

export default class Showcenter extends Component {
  state = {
    center: [],
  };
  componentDidMount = () => {
    this.getcenter();
    console.log(this.props.location.state.user);
  };
  getcenter = async () => {
    const token = sessionStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/center/${this.props.location.state.user}`,
        config
      );
      this.setState({
        center:res.data.data,
      });
      console.log(res.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  onDeleteUser = async (user, e) => {
    e.preventDefault();
    // console.log(user);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(
        `http://localhost:5000/api/v1/center/${user}`,
        config
      );

      alert("User Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div>
        {console.log()}
      <section>
        <div id="portfolio">
          <div class="container showtop  login-second ">
            <div class="page-title text-center">
              <h1 class="text-dark">Centers</h1>

              <hr class="pg-titl-bdr-btm" />
            </div>
            <div class="row">
              <div class="col-lg-12 ">{/* categotize */}</div>
            </div>

            <div class="row" id="" style={{ opacity: 1 }}>
              {/*  */}
              <div class="container pt-4">
                <div class=" tabletrans ">
                  <div class="well">
                    <div class="row mb-5">
                      <div class="col-md-6">
                        <div class="pull-right">
                          <a
                            href="/Center/addcenter"
                            class="btn btn-info btn-sm p-2"
                          >
                            Add Center
                          </a>
                        </div>
                      </div>

                      <div class="pull-left">
                        <a href="Center/Home" class="btn btn-info btn-sm p-2">
                          Back to Home
                        </a>
                      </div>
                    </div>
                    <table class="table table-hover">
                      <thead>
                      <tr>
                        <th>
                          <label class="text-dark">CenterName</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Center ManagerName </label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">CenterContact</label>
                        </th>
                        {/* <th>
                          {" "}
                          <label class="text-dark">candidatename</label>
                        </th>  */}

                        <th>
                          {" "}
                          <label className="d-flex justify-content-center text-dark">
                            Actions
                          </label>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                          {this.state.center.map((center) => (
                            <tr key={center._id}>
                       
                        <td className="tbld">{center.Centername}</td>
                        <td className="tbld">{center.CenterManagername}</td>
                        <td className="tbld">{center.ccontact}</td>
                        
                        <td className="d-flex justify-content-center tbld">
                                <div className="btn-group ">
                                  <a
                                    href=""
                                    className="btn btn-danger btn-md mr-5"
                                    value={center._id}
                                    onClick={(e) =>
                                      this.onDeleteUser(center._id, e)
                                    }
                                  >
                                    <i className="fa fa-trash-o"></i>
                                  </a>

                                  {/* <a href="" className="btn btn-info btn-md">
                                    <i className="fa fa-edit"></i>
                                  </a> */}
                                </div>
                              </td>
                            </tr>
                          ))}
                          </tbody>
                          
                          </table>
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

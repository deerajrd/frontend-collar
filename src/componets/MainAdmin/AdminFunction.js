import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import ShowCenter from "./Showcenter";
import ShowCompany from "./ShowCompany";
import Addcenter from "./addcenter";
import Category from "./Category";
import addUser from "./AddUser";

export default class All extends Component {

  state = {
    users: [],
    center: [],
    category: [],
  };
  getCategory = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category/",
        config
      );
      this.setState({
        category: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  getcenter = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/center`,
        config
      );
      this.setState({
        center: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render(){
  return (
    <Router>
      <div className="">
        <MainNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        

        <Switch>
          {/* <Route exact 
          path={"/Company/Home"}
          render={(props) => ( <CompanyHome
            {...props}
            user={this.state.user}
            getcenter={this.getcenter}
            // getCategory={this.getCategory}
            center={this.state.center}
            // category={this.state.category}
          />
        )}
      />
       <Route
              exact
              path={"/Company/Category"}
              render={(props) => (
                <Category
                  user={this.state.user}
                  getcenter={this.getcenter}
                  getCategory={this.getCategory}
                  center={this.state.center}
                  category={this.state.category}
                />
              )}
            /> */}


           <Route exact path={"/admin/Home"} component={MainHome} /> 
          {/* <Route exact path={"/main/add"} component={Register} /> */}
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route path={"/admin/Showcenter"} component={ShowCenter} />
          <Route path={"/admin/Showcompany"} component={ShowCompany} />
          <Route path={"/admin/category"} component={Category} /> 
          <Route path={"/admin/addcenter"} component={Addcenter} />
          <Route path={"/admin/addUser"} component={addUser} />
        </Switch>
      </div>
    </Router>
  );
}
}



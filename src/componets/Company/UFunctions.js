import React, { Component } from "react";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CompanyHome from "./CompanyHome";
// import fRegistration from "./Registration";
import CompanyNavbar from "./CompanyNavbar";
import Category from "./Category";
import Center from "./center";
import axios from "axios";
import QuickModel from "./QuickModel";

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
  render() {
  return (
    <Router>
      <div className="">
        <CompanyNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact 
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
            />
            <Route path={"/Company/center"} component={Center} />
            <Route path={"/Company/Showcenter"} component={QuickModel} />
            {/* <Route path={"/Company/Category"} component={Center} /> */}
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          {/* <Route exact path={"/Company/Category"} component={Category} /> */}
        </Switch>
      </div>
    </Router>
  );
}
}
// export default App;

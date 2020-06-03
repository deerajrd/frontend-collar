import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminHome from "./AdminHome";
// import fRegistration from "./Registration";
import AdminNavbar from "./AdminNavbar";
import AddCenter from "./addcenter";
import ShowCenter from "./Showcenter";
import Prof from "./Prof";
import ProfileEdit from "./ProfileEdit";
import orders from "./orders";

export default class AllF extends React.Component {
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
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/center`,
        config
      );
      this.setState({
        products: res.data.data,
      });
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

render(){
  return (
    <Router>
      <div className="">
        <AdminNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/Center/Home"} component={AdminHome} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route exact
          path={"/Center/addcenter"}
          render={(props) => (
            <AddCenter
              {...props}
              // getproducts={this.getproducts}
              getCategory={this.getCategory}
              // products={this.state.products}
              category={this.state.category}
            />
          )}
            />
<Route
              path={"/Center/Showcenter"}
              getcenter={this.getcenter}
              center={this.state.center}
              component={ShowCenter}
            />

          {/* <Route path={"/Center/Showcenter"} component={ShowCenter} /> */}
          <Route path={"/Center/Profile"} component={Prof} />
          <Route path={"/Center/ProfileEdit"} component={ProfileEdit} />
          <Route path={"/Center/orders"} component={orders} />
        </Switch>
      </div>
    </Router>

  );
}
}


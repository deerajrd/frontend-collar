import React, { Fragment } from "react";
import Login from "./componets/Login";
import fRegistration from "./componets/Center/Registration";
import "./componets/CSS/Home.css";

import Footer from "./componets/publics/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Functions from "./componets/Center/Functions";
import AdminNavbar from "./componets/Center/AdminNavbar";
import AdminFunction from "./componets/MainAdmin/AdminFunction"
import All from "./componets/publics/All";
// import Alert from "./componets/publics/Alert";
import UFunctions from "./componets/Company/UFunctions";
import CompanyNavbar from "./componets/Company/CompanyNavbar";
// import MFunctions from "./componets/MainAdmin/AdminFunction";
import MainNavbar from "./componets/MainAdmin/MainNavbar";
// import UserHome from "./componets/UserAdmin/UserHome";

import PrivateRoute from "./componets/utils/PrivateRoute"
class App extends React.Component {
  //  state = {

  //    user: {}
  //  };
  //  LoginUser = async text => {
  //    const res = await axios.post(
  //    ` http://localhost:5000/api/auth/`
  //    );
  //    console.log(res.data.items);
  //    this.setState({
  //      users: res.data.items
  //    });
  //  };
  // state = {
  //   alert: null,
  // };
  // setAlert = (msg, type) => {
  //   this.setState({ alert: { msg, type } });
  //   setTimeout(() => this.setState({ alert: null }), 5000);
  // };
  render() {
    return (
      <Router>
        <div className="">
          {/* <Alert alert={this.state.alert} />
          <Navbar /> */}
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}
          <Switch>
            <Route exact path={"/Login/:type"} component={Login} />
          </Switch>
          <AdminNavbar />
          <CompanyNavbar />
          <MainNavbar />
          
          <Switch>
            <PrivateRoute role="center" path={"/Center/"} component={Functions} />
            <PrivateRoute role="employer" path={"/Company"} component={UFunctions} />
            <PrivateRoute role="admin" path={"/admin/"} component={AdminFunction} />
            {/* <Route path={"/main/"} component={MFunctions} /> */}
            {/* <Route exact path={"/admin"} component={UserHome} /> */}

            {/* <Route exact path={"/admin"} component={UserHome} /> */}


            <All></All>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

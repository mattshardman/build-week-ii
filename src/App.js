import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddContent from "./components/Home/AddContent";
import withLogin from "./components/loginHOC";
import Header from "./components/Home/Header";
import MyHome from "./components/Home/MyHome";
import OtherHome from "./components/Home/OtherHome";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header {...this.props} />
          <Route exact path="/" render={props => <Home {...props} {...this.props} />} />
          <Route path="/user/:id" render={props => <OtherHome {...props} {...this.props} />} />
          <Route exact path="/my-home" render={props => <MyHome {...props} {...this.props} />} />
          <Route exact path="/add" render={props => <AddContent {...props} {...this.props} />} />
        </>
      </Router>
    );
  }
}

export default withLogin(App);

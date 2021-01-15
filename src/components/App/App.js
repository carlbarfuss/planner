import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ResetPage from '../ResetPage/ResetPage';
import ResetLinkPage from '../resetLinkPage/ResetLinkPage'
import AssetPage from '../AssetPage/AssetPage'
import LiabilityPage from '../LiabilityPage/LiabilityPage'
import Dashboard from '../Dashboard/Dashboard'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/dashboard"
            />
            <ProtectedRoute
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/assets"
            />
            <ProtectedRoute
              exact
              path="/assets"
              component={AssetPage}
            />
            <ProtectedRoute
              exact
              path="/liabilities"
              component={LiabilityPage}
            />
            <ProtectedRoute
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <ProtectedRoute
              exact
              path="/home"
              component={LandingPage}
              authRedirect="/user"
            />
            <Route
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/forgotpassword"
              component={ResetPage}
              authRedirect="/user"
            />
            <Route
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/resetpassword"
              component={ResetLinkPage}
              authRedirect="/user"
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);

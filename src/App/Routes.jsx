// react libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from 'pages/HomePage';
import AdminPage from 'pages/AdminPage';
import ClientsPage from 'pages/ClientsPage';
import SignupPage from 'pages/SignupPage';
import NotFoundPage from 'pages/NotFoundPage';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/client" component={ClientsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default Routes;

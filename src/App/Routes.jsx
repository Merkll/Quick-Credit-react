// react libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from 'pages/HomePage';
import AdminPage from 'pages/AdminPage';
import ClientsPage from 'pages/ClientsPage';
import NotFoundPage from 'pages/NotFoundPage';
import LogoutPage from 'pages/LogoutPage';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/client" component={ClientsPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default Routes;

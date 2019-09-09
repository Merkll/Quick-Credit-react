/* eslint-disable react/jsx-props-no-spreading */
// react libraries
import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect, Link } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import DashBoard from 'pages/Dashboard';
import Loans from 'components/Loans';
import Loan from 'components/Loan';
import Clients from 'components/Clients';
import Client from 'components/Client';
import Message from 'components/Message';

// utils
import connect from 'utils/connect';

import 'scss/home';


/**
 * @exports
 * @class HomePage
 * @extends Component
 * @classdesc Creates HomePage Component
 *
 * @returns {JSX} HomePage Component
 */
class AdminPage extends Component {
  componentDidMount() {}

  render() {
    const { isadmin } = Storage.getItem('user') || {};

    console.log(Storage.getItem('user'));

    return (
      <>
        {!isadmin && <Redirect to="/client" />}
        <Message />
        <div className="container-fluid">
          <div className="menu">
            <a href="./index.html"><span className="logo">Quick Credit</span></a>
            <nav>
              <Link to="/?logout=true">Logout</Link>
            </nav>
          </div>
          <div className="row">
            <div className="col-2">
              <Sidebar heading="Admin">
                <li>
                  <NavLink to="/admin" activeClassName="currentLink">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/admin/clients" activeClassName="currentLink">Clients</NavLink>
                </li>
                <li>
                  <NavLink to="/admin/loans" activeClassName="currentLink">Loans</NavLink>
                </li>
              </Sidebar>
            </div>
            <div className="col-9 content">
              <Switch>
                <Route exact path="/admin" component={DashBoard} />
                <Route exact path="/admin/clients" render={() => <Clients title="Clients" />} />
                <Route exact path="/admin/loans" render={() => <Loans title="Loans" />} />
                <Route exact path="/admin/loans/:id" render={(props) => <Loan {...props} isAdmin />} />
                <Route exact path="/admin/clients/:email" render={(props) => <Client {...props} />} />
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect({ })(AdminPage);

/* eslint-disable react/jsx-props-no-spreading */
// react libraries
import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import DashBoard from 'pages/Dashboard';
import Loans from 'components/Loans';
import Loan from 'components/Loan';
import Clients from 'components/Clients';
import Client from 'components/Client';

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
    const { isAdmin } = Storage.getItem('user') || {};

    return (
      <>
        {!isAdmin && <Redirect to="/client" />}
        <div className="container-fluid">
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
                <Route exact path="/admin/clients/:id" render={(props) => <Client {...props} />} />
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect({ })(AdminPage);

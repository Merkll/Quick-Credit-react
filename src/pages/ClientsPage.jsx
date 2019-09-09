/* eslint-disable react/jsx-props-no-spreading */
// react libraries
import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import DashBoard from 'pages/Dashboard';
import Loans from 'components/Loans';
import Loan from 'components/Loan';
import LoanApplication from 'components/LoanApplication';
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
        {isAdmin && <Redirect to="/admin" />}
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar heading="Admin">
                <li>
                  <NavLink to="/client" activeClassName="currentLink">Loans</NavLink>
                </li>
                <li>
                  <NavLink to="/client/apply" activeClassName="currentLink">Loan Application</NavLink>
                </li>
              </Sidebar>
            </div>
            <div className="col-9 content">
              <Switch>
                <Route exact path="/client" render={() => <Loans title="Loans" basePath="client" />} />
                <Route exact path="/client/apply" render={() => <LoanApplication title="Clients" />} />
                <Route exact path="/client/loans/:id" render={(props) => <Loan {...props} basePath="client" />} />
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect({ })(AdminPage);

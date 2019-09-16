/* eslint-disable react/jsx-props-no-spreading */
// react libraries
import React, { Component } from 'react';
import {
  Switch, Route, Redirect, Link
} from 'react-router-dom';

import Loans from 'components/Loans';
import Loan from 'components/Loan';
import LoanApplication from 'components/LoanApplication';
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
    const { isadmin, id, ...data } = Storage.getItem('user') || {};
    const { firstname = '', lastname = '' } = data;
    return (
      <>
        {isadmin && <Redirect to="/admin" />}
        {!id && <Redirect to="/" />}
        <Message />
        <div className="container-fluid">
          <div className="menu client">
            <a href="./index.html"><span className="logo">Quick Credit</span></a>
            <nav>
              <button className="link" type="button">{`${firstname} ${lastname}`}</button>
              <Link to="/client">Loans</Link>
              <Link to="/logout">Logout</Link>
            </nav>
          </div>
          <div className="row">
            <div className="col-11 content">
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

/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

import connect from 'utils/connect';

import CardContainer from 'components/CardContainer';
import Card from 'components/Card';

import { getAllLoans } from 'modules/loans';

class Loans extends React.Component {
  componentDidMount() {
    const { getAllLoansDispatch } = this.props;

    getAllLoansDispatch();
  }

  get Loans() {
    const { loans: { loans = [] }, viewLoan, basePath } = this.props;

    return loans.map((loan) => (
      <Card key={loan.id} header={<button className="button-link" type="button" onClick={() => viewLoan(loan.id)}><span>{loan.id}</span></button>}>
        <span>
          Status
          <i>{loan.status}</i>
        </span>
        <span>
          Application Date
          {' '}
          <i>{loan.createdOn}</i>
        </span>
        <span>
          Loan Amount
          {' '}
          <i>{loan.amount}</i>
        </span>
        <span>
          Loan Tenor
          {' '}
          <i>{loan.tenor}</i>
        </span>
        <span>
          Balance
          {' '}
          <i>{loan.balance}</i>
        </span>
        <span>
         Next Repayment
          {' '}
          <i>
            {loan.paymentInstallment}
            {' '}
          </i>
        </span>
        <Link to={`/${basePath || 'admin'}/loans/${loan.id}`}>View Loan</Link>
      </Card>
    ));
  }

  render() {
    const { children, title } = this.props;
    return (
      <>
        <div className="page-title">
          <span>{ title }</span>
        </div>
        <CardContainer>
          {this.Loans}
        </CardContainer>
        {children}
      </>
    );
  }
}

export default connect({ getAllLoansDispatch: getAllLoans })(Loans);

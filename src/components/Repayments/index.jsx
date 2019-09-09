/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import connect from 'utils/connect';

import { getLoanRepayment } from 'modules/loans';

class Repayments extends React.Component {
  componentDidMount() {
    const { getRepaymentsDispatch, loan } = this.props;

    getRepaymentsDispatch({ loan });
  }


  get repayments() {
    const { loans: { repayments = [] } } = this.props;

    return repayments.map((repayment) => (
      <tr key={repayment.id}>
        <td>{repayment.id}</td>
        <td>{repayment.createdOn}</td>
        <td>{repayment.amount}</td>
        <td>{repayment.balance}</td>
      </tr>
    ));
  }

  render() {
    return (
      <>
        <div className="details">
          <div className="page-title">
            <span>Loan Repayment History </span>
          </div>
          <div className="table-container" id="repayments-root">
            <div className="table-container">
              <table className="repayment-table">
                <thead>
                  <tr>
                    <th>Payment ID</th>
                    <th>Date Paid</th>
                    <th>Amount Paid</th>
                    <th>Loan Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {this.repayments}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect({ getRepaymentsDispatch: getLoanRepayment })(Repayments);

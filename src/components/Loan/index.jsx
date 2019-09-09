/* eslint-disable react/prop-types */
import React from 'react';

import Repayments from 'components/Repayments';

import connect from 'utils/connect';


import { getSingleLoan, postLoanRepayment, verifyLoan } from 'modules/loans';

class Loans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match: { params }, getLoanDispatch, loans: { loan = {} } } = this.props;

    getLoanDispatch(params);
  }

  postRepayment = () => {
    const { loans: { loan }, postLoanRepaymentDispatch } = this.props;

    postLoanRepaymentDispatch({ loan });
  }

  verifyLoan = () => {
    const { loans: { loan }, verifyLoanDispatch } = this.props;

    verifyLoanDispatch(loan);
  }

  render() {
    const { loans: { loan = {} }, match: { params }, isAdmin } = this.props;
    const { loanId } = this.state;

    return (
      <>
        <div className="page-title">
          <span>
            <i>{loan.id}</i>
          </span>
          <span className="float-right color-grey"><i>{loan.status}</i></span>
        </div>
        <div className="details">
          <div className="form">
            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="" className="">Application Date</label>
                <input type="text" value={loan.createdOn} disabled />
              </div>
              <div className="input-wrapper">
                <label htmlFor="" className="">Amount</label>
                <input type="text" value={loan.amount} disabled />
              </div>
              <div className="input-wrapper">
                <label htmlFor="" className="">Tenor</label>
                <input type="text" value={loan.tenor} disabled />
              </div>
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="" className="">Balance</label>
                <input type="text" value={loan.balance} disabled />
              </div>
              <div className="input-wrapper">
                <label htmlFor="" className="">Next Repayment</label>
                <input type="text" value={loan.paymentInstallment} disabled />
              </div>
            </div>
            {isAdmin && (loan.status === 'pending') && <button type="button" onClick={this.postRepayment} className="btn float-right overlay-btn client-action">Verify</button>}
            {isAdmin && (loan.status === 'verified' || loan.status === 'rejected') && <button type="button" onClick={this.verifyLoan} className="btn float-right overlay-btn client-action">Post Repayment</button>}
          </div>

          <Repayments loan={params.id} />
        </div>
      </>
    );
  }
}

export default connect({
  getLoanDispatch: getSingleLoan,
  postLoanRepaymentDispatch: postLoanRepayment,
  verifyLoanDispatch: verifyLoan
})(Loans);

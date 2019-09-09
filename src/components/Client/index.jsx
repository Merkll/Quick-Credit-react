/* eslint-disable react/prop-types */
import React from 'react';

import connect from 'utils/connect';


import { getSingleClient, updateSingleClient } from 'modules/clients';

class Loans extends React.Component {
  componentDidMount() {
    const { match: { params }, getClientDispatch } = this.props;
    console.log(params);

    getClientDispatch(params);
  }

  rejectClient = () => {
    const { updateSingleClientDispatch } = this.props;

    updateSingleClientDispatch({ status: 'rejected' });
  }

  approveClient = () => {
    const { updateSingleClientDispatch, match: { params } } = this.props;

    updateSingleClientDispatch(params);
  }

  render() {
    const { clients: { client = {} } } = this.props;

    return (
      <>
        <div className="page-title">
          <i>{client.id}</i>
          <span className="float-right color-grey">{client.status}</span>
        </div>
        <div className="details">
          <div className="form">
            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="" className="">First Name</label>
                <input type="text" value={client.firstname} disabled="" readOnly />
              </div>
              <div className="input-wrapper">
                <label htmlFor="" className="">Last Name</label>
                <input type="text" value={client.lastname} disabled="" readOnly />
              </div>
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="" className="">Email</label>
                <input type="text" value={client.email} disabled="" readOnly />
              </div>
              <div className="input-wrapper">
                <label htmlFor="" className="">Mobile</label>
                <input type="text" value={client.mobile} disabled="" readOnly />
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="" className="">Address</label>
              <input type="text" value={client.address} disabled="" readOnly />
            </div>
            {(client.status === 'unverified' || client.status === 'rejected') && <button type="button" onClick={this.approveClient} className="btn float-right overlay-btn client-action">Approve</button>}
          </div>
        </div>
      </>
    );
  }
}

export default connect({
  getClientDispatch: getSingleClient, updateSingleClientDispatch: updateSingleClient
})(Loans);

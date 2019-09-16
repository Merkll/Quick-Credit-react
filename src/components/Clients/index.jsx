/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

import connect from 'utils/connect';

import CardContainer from 'components/CardContainer';
import Card from 'components/Card';

import { getAllClients } from 'modules/clients';

class Clients extends React.Component {
  componentDidMount() {
    const { getAllClientsDispatch } = this.props;

    getAllClientsDispatch();
  }

  get Clients() {
    const { clients: { clients = [] } } = this.props;

    return clients.map((client) => (
      <Card
        key={client.id}
        header={
          (
            <>
              <span>status</span>
              <span>
                {client.status}
              </span>
            </>
          )
        }
      >
        <span>
          Name
          <i>{`${client.firstname} ${client.lastname}`}</i>
        </span>
        <span>
          Email
          <i>{client.email}</i>
        </span>
        <span>
          Phone
          <i>{client.phone}</i>
        </span>
        <Link to={`/admin/clients/${client.email}`}>View Client</Link>
      </Card>
    ));
  }

  render() {
    const { title } = this.props;
    return (
      <>
        <div className="page-title">
          <span>{ title }</span>
        </div>
        <CardContainer>
          {this.Clients}
        </CardContainer>
      </>
    );
  }
}

export default connect({ getAllClientsDispatch: getAllClients })(Clients);

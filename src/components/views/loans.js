import React, { PureComponent } from 'react';
import { MDBInput } from 'mdbreact';

import Table from '../table/table';

export default class Loans extends React.Component {
    state = {
        columns: [
            {
              'label': 'Status',
              'field': 'status',
              'sort': 'asc'
            },
            {
              'label': 'id',
              'field': 'id',
              'sort': 'asc'
            },
            {
              'label': 'Client',
              'field': 'client',
              'sort': 'asc'
            },
            {
              'label': 'Amount',
              'field': 'amount',
              'sort': 'asc'
            },
            {
              'label': 'Due Date',
              'field': 'due',
              'sort': 'asc'
            }
          ],
        rows: [
            {
              'status': <MDBInput label=" " type="checkbox" id="checkbox6" />,
              'id': '#ooyr90949ji',
              'client': '#ooyr90949ji',
              'amount': '40 000',
              'Due': '30 Mar 2019'
            },
            {
              'status': <MDBInput label=" " type="checkbox" id="checkbox6" />,
              'id': '#ooyr90949ji',
              'client': '#ooyr90949ji',
              'amount': '40 000',
              'Due': '30 Mar 2019'
            },
            {
              'status': <MDBInput label=" " type="checkbox" id="checkbox6" />,
              'id': '#ooyr90949ji',
              'client': '#ooyr90949ji',
              'amount': '40 000',
              'Due': '30 Mar 2019'
            },
          ]
    }
    render() {
        return (
            <Table rows={this.state.rows} columns={this.state.columns} />
        )
    };
}
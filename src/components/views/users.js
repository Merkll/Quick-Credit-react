import React, { PureComponent } from 'react';
import { MDBInput } from 'mdbreact';

import Table from '../table/table';

export default class Users extends React.Component {
    state = {
        columns: [
            {
              'label': 'Status',
              'field': 'status',
              'sort': 'asc'
            },
            {
              'label': 'Name',
              'field': 'name',
              'sort': 'asc'
            },
            {
              'label': 'Phone',
              'field': 'phone',
              'sort': 'asc'
            }
          ],
        rows: [
            {
              'status': <MDBInput label=" " type="checkbox" id="checkbox6" />,
              'name': 'Mark Otto',
              'phone': '0000000'
            },
          ]
    }
    render() {
        return (
            <Table rows={this.state.rows} columns={this.state.columns} />
        )
    };
}
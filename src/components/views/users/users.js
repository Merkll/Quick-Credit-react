import React from 'react';
import { MDBInput } from 'mdbreact';

import Table from '../../table/table';
import { columns } from './config';

export default class UsersView extends React.Component {
    state = {
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
            <Table rows={this.state.rows} columns={columns} />
        )
    };
}
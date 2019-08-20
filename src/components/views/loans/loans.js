import React from 'react';
import { MDBInput } from 'mdbreact';

import { columns } from './config';
import Table from '../../table/table';


export default class LoansView extends React.Component {
    state = {
        rows: [
            {
              'status': <MDBInput label=" " type="checkbox" id="checkbox6" />,
              'id': '#ooyr90949ji',
              'client': '#ooyr90949ji',
              'amount': '40 000',
              'Due': '30 Mar 2019'
            }
          ]
      }
    render() {
        return (
            <Table rows={this.state.rows} columns={columns} />
        )
    };
}
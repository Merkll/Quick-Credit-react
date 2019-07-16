import React from 'react';
import CardContainer from '../cards/cardContainer';
import Analytic from '../cards/analytic';
import Tabs from '../tabs/tabs';
import Users from '../views/users';
import Loans from '../views/loans';

export default class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CardContainer>
                    <Analytic title="New Users" subtitle="1" icon="fa-user"></Analytic>
                    <Analytic title="New Loans" subtitle="4" icon="fa-dollar-sign" />
                    <Analytic title="Due Repayments" subtitle="4" blink={true} color='danger'/>
                    <Analytic title="Amount Loaned" subtitle="2000" icon="fa-dollar-sign" />
                </CardContainer>
                {/* <TablePage /> */}
                <Tabs>
                    <div label="New Users">
                        <Users />
                    </div>
                    <div label="New Loans">
                        <Loans />
                    </div>
                </Tabs>
            </React.Fragment>
        );
    }
}

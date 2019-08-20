import React from 'react';
import CardContainer from '../cards/cardContainer';
import Analytic from '../cards/analytic';
import Tabs from '../tabs/tabs';
import UsersView from '../views/users/users';
import LoansView from '../views/loans/loans';

export default () => {
    return (
        <React.Fragment>
            <CardContainer>
                <Analytic title="New Users" subtitle="1" icon="fa-user"></Analytic>
                <Analytic title="New Loans" subtitle="4" icon="fa-dollar-sign" />
                <Analytic title="Due Repayments" subtitle="4" blink={true} color='danger'/>
                <Analytic title="Amount Loaned" subtitle="2000" icon="fa-dollar-sign" />
            </CardContainer>
            <Tabs>
                <div label="New Users">
                    <UsersView />
                </div>
                <div label="New Loans">
                    <LoansView />
                </div>
            </Tabs>
        </React.Fragment>
    );
}

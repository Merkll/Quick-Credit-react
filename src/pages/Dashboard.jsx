// react libraries
import React from 'react';

import CardContainer from 'components/CardContainer';
import Analytic from 'components/Analytic';
import Loans from 'components/Loans';
import Clients from 'components/Clients';

const DashboardPage = () => (
  <div>
    <CardContainer>
      <Analytic title="New Users" subtitle="2" icon="fa-users purple-color" color="red" titleColor="purple-color" />
      <Analytic title="Pending Repayments" subtitle="2" icon="fa-money-bill-wave purple-color" color="red" titleColor="purple-color" />
      <Analytic title="Pending Repayments" subtitle="50" icon="fa-percent purple-color" color="red" titleColor="purple-color" />
      <Analytic title="Repayed Loans" subtitle="50" icon="fa-percent purple-color" color="red" titleColor="purple-color" />
    </CardContainer>
    <Loans title="New Loan Applications" />
    <Clients title="New Clients" />
  </div>
);

export default DashboardPage;

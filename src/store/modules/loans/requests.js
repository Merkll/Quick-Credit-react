import http from 'utils/http';

import { loans, repayment } from 'fixtures/';

export default {
  getAllLoans: async () => {
    return { loans };
  },

  getSingleLoan: async ({ id }) => {
    const loan = loans.find((singleLoan) => singleLoan.id === id);

    return { loan };
  },
  getLoanRepayments: async ({ loan }) => {
    const repayments = repayment.filter((singleRepayment) => singleRepayment.loanId === loan);

    return { repayments };
  },
};

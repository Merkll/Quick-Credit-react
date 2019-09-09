import http from 'utils/http';

export default {
  getAllLoans: async () => http.get('/loans'),
  getSingleLoan: async ({ id }) => http.get(`/loans/${id}`),
  getLoanRepayments: async ({ loan }) => http.get(`/loans/${loan}/repayments`),
  applyForLoan: async ({ amount, tenor, purpose }) => http.post('/loans', { amount: +amount, tenor: +tenor, purpose }),
  verifyLoan: async ({ id, status }) => http.patch(`/loans/${id}`, { status }),
  postLoanRepayment: async ({ id }) => http.post(`/loans/${id}/repayments`)
};

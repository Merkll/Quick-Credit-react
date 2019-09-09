import http from 'utils/http';

export default {
  getAllClients: async () => http.get('/users'),
  getSingleClient: async ({ email }) => http.get(`/users/${email}`),
  verifyClient: async ({ email }) => http.patch(`/users/${email}/verify`),
};

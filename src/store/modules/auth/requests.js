import http from 'utils/http';

export default {
  signUp: async ({ email }) => http.post('/auth/reset_password', {
    email
  }),

  login: async ({ password, id, token }) => http.patch(`/auth/update_password/${id}/${token}`, {
    password
  })
};

import http from 'utils/http';

export default {
  signUp: async (body) => http.post('/auth/signup', {
    ...body
  }),

  login: async (body) => http.post('/auth/signin', {
    ...body
  })
};

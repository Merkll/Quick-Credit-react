import http from 'utils/http';

import { users as clients } from 'fixtures/';

export default {
  getAllClients: async () => {
    return { clients };
  },

  getSingleClient: async ({ id }) => {
    const client = clients.find((singleLoan) => singleLoan.id === id);

    return { client };
  },
};

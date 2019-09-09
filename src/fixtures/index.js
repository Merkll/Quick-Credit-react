// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker';

const formatDate = (date) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

export const users = new Array(30).fill(0).map(() => ({
  id: faker.random.uuid(),
  email: faker.internet.email(),
  firstName: faker.name.findName(),
  lastName: faker.name.lastName(),
  password: faker.random.uuid(),
  address: faker.address.streetAddress(),
  status: 'unverified',
  isAdmin: faker.random.boolean(),
}));

export const loans = Array(20).fill(0).map(() => ({
  id: faker.random.uuid(),
  client: faker.random.arrayElement(users).id,
  createdOn: formatDate(new Date()),
  status: 'pending',
  repaid: faker.random.boolean(),
  tenor: faker.random.number({ max: 12 }),
  amount: faker.random.number({ min: 2000 }),
  paymentInstallment: faker.random.number({ min: 2000 }),
  balance: faker.random.number({ min: 2000 }),
  interest: faker.random.number({ min: 2000 }),
  purpose: faker.lorem.sentence()
}));

export const repayment = Array(100).fill(0).map(() => ({
  id: faker.random.uuid(),
  createdOn: formatDate(new Date()),
  loanId: faker.random.arrayElement(loans).id,
  amount: faker.random.number({ min: 2000 }),
  balance: faker.random.number({ min: 2000 }),
}));

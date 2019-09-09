export default {
  loanApplication: (validator) => [{
    field: 'amount',
    check: validator.isNumeric,
    message: 'Amount must be a number'
  }, {
    field: 'tenor',
    check: validator.isNumeric,
    message: 'Tenor must be a number'
  }, {
    field: 'tenor',
    check: ({ tenor }) => +tenor <= 12 && +tenor >= 1,
    message: 'Amount must be between 1 and 12',
    custom: true
  }, {
    field: 'purpose',
    check: validator.isLength,
    args: [{ min: 8 }],
    message: 'Loan purpose should be min of 8 characters'
  }],
};

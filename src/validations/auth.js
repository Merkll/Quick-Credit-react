export default {
  signupValidation: (validator) => [{
    field: 'firstName',
    check: validator.isEmpty,
    validWhen: false,
    message: 'First Name Cannot be empty'
  }, {
    field: 'lastName',
    check: validator.isEmpty,
    validWhen: false,
    message: 'last Name Cannot be empty'
  }, {
    field: 'email',
    check: validator.isEmail,
    message: 'Enter a valid email'
  }, {
    field: 'mobile',
    check: validator.isMobilePhone,
    message: 'Enter a valid mobile number'
  }, {
    field: 'password',
    check: validator.isLength,
    args: [{ min: 8, max: 15 }],
    message: 'Password should be between 8 and 15 characters'
  }, {
    field: 'passwordConfirm',
    check: (fields) => fields.password === fields.passwordConfirm,
    custom: true,
    message: 'Password and confirm password should be equal'
  }, {
    field: 'address',
    check: validator.isEmpty,
    validWhen: false,
    message: 'Contact address cannot be empty'
  }],

  loginValidation: (validator) => [{
    field: 'email',
    check: validator.isEmail,
    message: 'Enter a valid email'
  }, {
    field: 'password',
    check: validator.isEmpty,
    validWhen: false,
    message: 'Password cannot be left blank'
  }]
};

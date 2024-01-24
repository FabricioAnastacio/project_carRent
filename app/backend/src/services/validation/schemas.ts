import * as joi from 'joi';

const emailValid = /^[a-z0-9]+@[a-z0-9]+\.[a-z]/i;
const emailInvalid = '"email" must be a valid email';

const verifyNewDataUser = joi.object().keys({
  userName: joi.string().min(8),
  email: joi.string().regex(emailValid).message(emailInvalid),
  cpf: joi.string().min(14).max(14),
  password: joi.string().min(8),
});

export default verifyNewDataUser;

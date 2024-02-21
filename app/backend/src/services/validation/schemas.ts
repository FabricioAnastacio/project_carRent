import * as joi from 'joi';

const emailValid = /^[a-z0-9]+@[a-z0-9]+\.[a-z]/i;
const emailInvalid = '"email" must be a valid email';

export const verifyNewDataUser = joi.object().keys({
  userName: joi.string().min(8).required(),
  email: joi.string().regex(emailValid).message(emailInvalid).required(),
  cpf: joi.string().min(14).max(14).required(),
  password: joi.string().min(8).required(),
});

export const verifyUpdateDataUser = joi.object().keys({
  userName: joi.string().min(8).required(),
  password: joi.string().min(8).required(),
  email: joi.string().regex(emailValid).message(emailInvalid).required(),
});

export const verifyNewDataVehicle = joi.object().keys({
  concessionaireId: joi.number().required(),
  model: joi.string().min(3).max(10).required(),
  brand: joi.string().min(4).max(10).required(),
  cc: joi.number().max(2000).required(),
  capacity: joi.number().max(6).required(),
  image: joi.required(),
  description: joi.string().required(),
});

export const verifyNewDataConcessionaire = joi.object().keys({
  name: joi.string().min(2).max(20).required(),
});

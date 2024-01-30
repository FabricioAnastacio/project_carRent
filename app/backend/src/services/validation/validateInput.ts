import { ServiceError } from '../../Interfaces/serviceResponse';
import { ILoginValidation } from '../../Interfaces/ILogin';
import { IRequestUser, IUpdateUser } from '../../Interfaces/IUser';
import { verifyNewDataUser, verifyNewDataVehicle, verifyUpdateDataUser } from './schemas';
import { ICar } from '../../Interfaces/ICar';

const emailValid = /^[a-z0-9]+@[a-z0-9]+\.[a-z]/i;

export function verifyUser(data: ILoginValidation): ServiceError | null {
  const { email, password } = data;

  if (!email || !password) {
    return { status: 'INVALID_VALUE', data: { message: 'All fields must be filled' } };
  }

  if (!email.match(emailValid) || password.length < 6) {
    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
  }

  return null;
}

export function verifyRoleUser(role: string): ServiceError | null {
  if (role !== 'admin') {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }

  return null;
}

export function validateDataUser(data: IRequestUser): ServiceError | null {
  const { error } = verifyNewDataUser.validate(data);
  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };
  return null;
}

export function validateDataUpdateUser(data: IUpdateUser): ServiceError | null {
  const { error } = verifyUpdateDataUser.validate(data);
  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };
  return null;
}

export function validateDataCar(data: ICar): ServiceError | null {
  const { error } = verifyNewDataVehicle.validate(data);
  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };
  return null;
}

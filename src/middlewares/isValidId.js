import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValid = (req, _res, next) => {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) {
    throw createHttpError(400, 'ID is not valid');
  }

  next();
};

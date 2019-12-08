import db from '../models';
import errorHandler from '../helpers/errorHandler';

const add = data => {
  return db.charges
    .create(data)
    .then(charge => charge)
    .catch(errorHandler);
};

const list = (first = 10, offset = 0) => {
  return db.charges
    .findAll({ limit: first, offset: offset })
    .then(charges => charges)
    .catch(errorHandler);
};

const listByStatus = (balanceStatus: string) => {
  return db.charges
    .findAll({ where: { balanceStatus } })
    .then(charges => charges)
    .catch(errorHandler);
};

const getById = (id: string) => {
  return db.charges
    .findByPk(id)
    .then(charges => charges)
    .catch(errorHandler);
};

export { add, list, listByStatus, getById };

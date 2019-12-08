const errorHandler = (err, _req, _res, next) => {
  /* No routes handled the request and no system error, that means 404 issue. Forward to next middleware to handle it. */
  if (!err) return next();

  // render the error page
  switch (err.name) {
    case 'Error':
      throw new Error(err.message);
      break;
    case 'SequelizeUniqueConstraintError':
      const message: any = JSON.stringify(err.errors[0].message);
      throw message;
      break;
    case 'SequelizeConnectionRefusedError':
      throw 'Problema de conexão com o banco de dados. Verifique ás informações!';
      break;
    case 'SequelizeForeignKeyConstraintError':
      throw err.parent.sqlMessage;
      break;
    default:
      throw err;
      break;
  }
};

export default errorHandler;

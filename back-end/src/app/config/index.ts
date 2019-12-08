import 'dotenv/config';

const dialect = process.env.NODE_ENV == 'development' || 'test' ? 'sqlite' : 'mssql';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('dialect', dialect);

module.exports = {
  dialect,
  storage: './db.development.sqlite',
  username: process.env.MSSQL_USERNAME,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DB,
  host: process.env.MSSQL_HOST,
  port: process.env.MSSQL_PORT,
  name: 'meifacil',
};

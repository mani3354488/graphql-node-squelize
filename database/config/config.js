require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'devdatabase',
    host: '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'postgresql://postgres:postgres@localhost:5432/database_test',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  },
};

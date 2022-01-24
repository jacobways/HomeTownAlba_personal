const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL", 
    "dialect": "mysql"
  }
}

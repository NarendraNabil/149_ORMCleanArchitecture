require("dotenv").config();

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
};

const production = {
  use_env_variable: "POSTGRES_URL",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};

module.exports = {
  development,
  production
};

// menambahkan file config.js untuk mengatur konfigurasi database Sequelize dengan menggunakan variabel lingkungan dari file .env.
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: String(process.env.DB_PASS || ""),
    database: process.env.DB_NAME || "perpustakaan", // <-- Ubah jadi perpustakaan
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres"
  },
  production: {
    use_env_variable: "POSTGRES_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
};
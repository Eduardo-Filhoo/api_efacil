require('dotenv').config()

module.exports = {
  server: {
    port: process.env.SERVER_PORT || '5555'
  },
  database: {
    driver: process.env.DB_DRIVER || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    pass: process.env.DB_PASS || '',
    name: process.env.DB_NAME || 'db',
    port: process.env.DB_PORT || '3306'
  }
}

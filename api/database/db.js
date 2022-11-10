const config = require('../config/config')

module.exports = {
  dialect: config.database.driver,
  port: config.database.port,
  host: config.database.host,
  username: config.database.user,
  password: config.database.pass,
  database: config.database.name,
  define: {
    timestamps: true,
    underscored: false,
    underscoredAll: true,
  },
  logging: false,
}

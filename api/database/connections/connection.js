const { Sequelize } = require('sequelize');
const dbConfig = require('../db');

const sequelize = new Sequelize(dbConfig)

sequelize.authenticate()
.then(() => {
  console.log('[+] Database connection established');
})
.catch(err => {
  console.log('Error'+ err)
  console.error(`[-] Unable to connect to the database => ${err}`);
})

module.exports = sequelize

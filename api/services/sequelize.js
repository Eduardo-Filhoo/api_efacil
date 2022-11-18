const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection')

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Models
db.carryings = require('../models/Carrying')(sequelize, DataTypes)
db.customers = require('../models/Customer')(sequelize, DataTypes)
db.departures = require('../models/Departure')(sequelize, DataTypes)
db.entries = require('../models/Entry')(sequelize, DataTypes)
db.itemsDepartures = require('../models/ItemDeparture')(sequelize, DataTypes)
db.itemsEntries = require('../models/ItemEntry')(sequelize, DataTypes)
db.products = require('../models/Product')(sequelize, DataTypes)
db.providers = require('../models/Provider')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
  console.log('[+] Successfully syncing a database')
})
.catch(err => {
  console.log('Error'+ err)
  console.error(`[-] Unable not sync to database => ${err}`);
})

/* Relationships */

// Carryings and entries
db.carryings.hasMany(db.entries, { foreignKey: 'carryingId', as: 'carryingEntry', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.entries.belongsTo(db.carryings, { foreignKey: 'carryingId', as: 'entryCarrying' });

// Carryings and departures
db.carryings.hasMany(db.departures, { foreignKey: 'carryingId', as: 'carryingdeparture', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.departures.belongsTo(db.carryings, { foreignKey: 'carryingId', as: 'departureCarrying' });

// Departures and items departures
db.departures.hasMany(db.itemsDepartures, { foreignKey: 'departureId', as: 'departureItems', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.itemsDepartures.belongsTo(db.departures, { foreignKey: 'departureId', as: 'itemsDeparture' });

// Entries and items entries
db.entries.hasMany(db.itemsEntries, { foreignKey: 'entryId', as: 'entryItems', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.itemsEntries.belongsTo(db.entries, { foreignKey: 'entryId', as: 'itemsEntry' });

// Products and items departures
db.products.hasMany(db.itemsDepartures, { foreignKey: 'productId', as: 'departureProduct', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.itemsDepartures.belongsTo(db.products, { foreignKey: 'productId', as: 'productDeparture' });

// Products and items entries
db.products.hasMany(db.itemsEntries, { foreignKey: 'productId', as: 'entryProduct', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.itemsEntries.belongsTo(db.products, { foreignKey: 'productId', as: 'productEntry' });

// Customers and departures
db.customers.hasMany(db.departures, { foreignKey: 'customerId', as: 'customerDeparture', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.departures.belongsTo(db.customers, { foreignKey: 'customerId', as: 'departureCustomer' });

// Providers and entries
db.providers.hasMany(db.entries, { foreignKey: 'providerId', as: 'providerEntry', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.entries.belongsTo(db.providers, { foreignKey: 'providerId', as: 'entryprovider' });

module.exports = db

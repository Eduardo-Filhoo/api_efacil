const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection')

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Models
db.products = require('../models/Product')(sequelize, DataTypes)
db.receipts = require('../models/Receipt')(sequelize, DataTypes)
db.itemsReceipts = require('../models/ItemReceipt')(sequelize, DataTypes)
db.movements = require('../models/Movement')(sequelize, DataTypes)
db.providers = require('../models/Provider')(sequelize, DataTypes)
db.customers = require('../models/Customer')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
  console.log('[+] Successfully syncing a database')
})
.catch(err => {
  console.log('Error'+ err)
  console.error(`[-] Unable not sync to database => ${err}`);
})

// Products and Items Receipts
db.products.hasMany(db.itemsReceipts, { foreignKey: 'productId', as: 'itemReceiptProduct', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.itemsReceipts.belongsTo(db.products, { foreignKey: 'productId', as: 'productItemReceipt' });

// Receipts and Items Receipts
db.receipts.hasMany(db.itemsReceipts, { foreignKey: 'receiptId', as: 'itemReceiptReceipt', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.itemsReceipts.belongsTo(db.receipts, { foreignKey: 'receiptId', as: 'receiptItemReceipt' });

// Receipts and Movements
db.receipts.hasMany(db.movements, { foreignKey: 'receiptId', as: 'receiptMovement', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.movements.belongsTo(db.receipts, { foreignKey: 'receiptId', as: 'movementReceipt' });

// Customers and Receipts
db.customers.hasMany(db.receipts, { foreignKey: 'customerId', as: 'customer', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.receipts.belongsTo(db.customers, { foreignKey: 'customerId', as: 'receiptCustomer' });

// Providers and Receipts
db.providers.hasMany(db.receipts, { foreignKey: 'providerId', as: 'provider', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.receipts.belongsTo(db.providers, { foreignKey: 'providerId', as: 'receiptProvider' });

module.exports = db

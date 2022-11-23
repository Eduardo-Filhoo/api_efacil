const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.carryings = require("../database/models/Carrying")(sequelize, DataTypes);
db.customers = require("../database/models/Customer")(sequelize, DataTypes);
db.departures = require("../database/models/Departure")(sequelize, DataTypes);
db.entries = require("../database/models/Entry")(sequelize, DataTypes);
db.items = require("../database/models/Item")(sequelize, DataTypes);
db.products = require("../database/models/Product")(sequelize, DataTypes);
db.providers = require("../database/models/Provider")(sequelize, DataTypes);
db.receipts = require("../database/models/Receipt")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("[+] Successfully syncing a database");
  })
  .catch((err) => {
    console.log("Error" + err);
    console.error(`[-] Unable not sync to database => ${err}`);
  });

/* Relationships */

// Carryings and entries
db.carryings.hasMany(db.entries, {
  foreignKey: "carryingId",
  as: "carryingEntry",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});
db.entries.belongsTo(db.carryings, {
  foreignKey: "carryingId",
  as: "entryCarrying",
});

// Carryings and departures
db.carryings.hasMany(db.departures, {
  foreignKey: "carryingId",
  as: "carryingdeparture",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});
db.departures.belongsTo(db.carryings, {
  foreignKey: "carryingId",
  as: "departureCarrying",
});

// Products and items
db.products.hasMany(db.items, {
  foreignKey: "productId",
  as: "productItem",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});
db.items.belongsTo(db.products, { foreignKey: "productId", as: "itemProduct" });

// Receipts and items
db.receipts.hasMany(db.items, {
  foreignKey: "receiptId",
  as: "receiptItem",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});
db.items.belongsTo(db.receipts, { foreignKey: "receiptId", as: "itemReceipt" });

// Receipts and Entries
db.receipts.hasMany(db.entries, {
  foreignKey: "receiptId",
  as: "receiptEntry",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});
db.entries.belongsTo(db.receipts, {
  foreignKey: "receiptId",
  as: "entryReceipt",
});

// Receipts and Departures
db.receipts.hasMany(db.departures, {
  foreignKey: "receiptId",
  as: "receiptDeparture",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});
db.departures.belongsTo(db.receipts, {
  foreignKey: "receiptId",
  as: "departureReceipt",
});

// Customers and departures
db.customers.hasMany(db.departures, {
  foreignKey: "customerId",
  as: "customerDeparture",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});
db.departures.belongsTo(db.customers, {
  foreignKey: "customerId",
  as: "departureCustomer",
});

// Providers and entries
db.providers.hasMany(db.entries, {
  foreignKey: "providerId",
  as: "providerEntry",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});
db.entries.belongsTo(db.providers, {
  foreignKey: "providerId",
  as: "entryprovider",
});

module.exports = db;

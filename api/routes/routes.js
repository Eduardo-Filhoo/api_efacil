const routes = require("express").Router();
const productController = require('../controllers/product-controller')
const customerController = require('../controllers/customer-controller')
const providerController = require('../controllers/provider-controller')
const receiptController = require('../controllers/receipt-controller')
const itemController = require('../controllers/item-controller')
const movementController = require('../controllers/movement-contoller')

// Products
routes.get('/products', productController.list)
routes.get('/product/:id', productController.show)
routes.post('/add-product', productController.create)
routes.patch('/product/:id', productController.update)
routes.delete('/product/:id', productController.destroy)

// Custumers
routes.get('/customers', customerController.list)
routes.get('/customer/:id', customerController.show)
routes.post('/add-customer', customerController.create)
routes.patch('/customer/:id', customerController.update)
routes.delete('/customer/:id', customerController.destroy)

// Providers
routes.get('/providers', providerController.list)
routes.get('/provider/:id', providerController.show)
routes.post('/add-provider', providerController.create)
routes.patch('/provider/:id', providerController.update)
routes.delete('/provider/:id', providerController.destroy)

// Receipts
routes.get('/receipts', receiptController.list)
routes.get('/receipt/:id', receiptController.show)
routes.post('/add-receipt', receiptController.create)
routes.patch('/receipt/:id', receiptController.update)
routes.delete('/receipt/:id', receiptController.destroy)

// Items
routes.get('/items', itemController.list)
routes.get('/item/:id', itemController.show)
routes.post('/add-item', itemController.create)
routes.patch('/item/:id', itemController.update)
routes.delete('/item/:id', itemController.destroy)

// Movements
routes.get('/movements', movementController.list)
routes.get('/movement/:id', movementController.show)
routes.post('/add-entry', movementController.createEntry)
routes.post('/add-departure', movementController.createDeparture)
routes.patch('/entry/:id', movementController.updateEntry)
routes.patch('/departure/:id', movementController.updateDeparture)
routes.delete('/movement/:id', movementController.destroy)

module.exports = routes;

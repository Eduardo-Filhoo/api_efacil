const routes = require("express").Router()

// Controllers
const carryingController = require('../controllers/carrying-controller')
const customerController = require('../controllers/customer-controller')
const departureController = require('../controllers/departure-controller')
const entryController = require('../controllers/entry-controller')
const itemController = require('../controllers/item-controller')
const productController = require('../controllers/product-controller')
const providerController = require('../controllers/provider-controller')
const receiptController = require('../controllers/receipt-controller')

// Carryings
routes.get('/carryings', carryingController.list)
routes.get('/active/carryings', carryingController.find)
routes.get('/carrying/:id', carryingController.show)
routes.post('/carrying', carryingController.create)
routes.patch('/carrying/:id', carryingController.update)
routes.delete('/carrying/:id', carryingController.destroy)

// Custumers
routes.get('/customers', customerController.list)
routes.get('/active/customers', customerController.find)
routes.get('/customer/:id', customerController.show)
routes.post('/customer', customerController.create)
routes.patch('/customer/:id', customerController.update)
routes.delete('/customer/:id', customerController.destroy)

// Departures
routes.get('/departures', departureController.list)
routes.get('/departure/:id', departureController.show)
routes.post('/departure', departureController.create)
routes.patch('/departure/:id', departureController.update)
routes.delete('/departure/:id', departureController.destroy)

// Entries
routes.get('/entries', entryController.list)
routes.get('/entry/:id', entryController.show)
routes.post('/entry', entryController.create)
routes.patch('/entry/:id', entryController.update)
routes.delete('/entry/:id', entryController.destroy)

// Items
routes.get('/items', itemController.list)
routes.get('/item/:id', itemController.show)
routes.post('/item', itemController.create)
routes.patch('/item/:id', itemController.update)
routes.delete('/item/:id', itemController.destroy)

// Products
routes.get('/products', productController.list)
routes.get('/active/products', productController.find)
routes.get('/product/:id', productController.show)
routes.post('/product', productController.create)
routes.patch('/product/:id', productController.update)
routes.delete('/product/:id', productController.destroy)

// Providers
routes.get('/providers', providerController.list)
routes.get('/active/providers', providerController.find)
routes.get('/provider/:id', providerController.show)
routes.post('/provider', providerController.create)
routes.patch('/provider/:id', providerController.update)
routes.delete('/provider/:id', providerController.destroy)

// Receipts
routes.get('/receipts', receiptController.list)
routes.get('/receipt/:id', receiptController.show)
routes.post('/receipt', receiptController.create)
routes.patch('/receipt/:id', receiptController.update)
routes.delete('/receipt/:id', receiptController.destroy)

module.exports = routes;

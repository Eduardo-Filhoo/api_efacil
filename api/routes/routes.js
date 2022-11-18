const routes = require("express").Router()
// Controllers
const carryingController = require('../controllers/carrying-controller')
const customerController = require('../controllers/customer-controller')
const departureController = require('../controllers/departure-controller')
const entryController = require('../controllers/entry-controller')
const itemDepartureController = require('../controllers/itemDeparture-controller')
const itemEntryController = require('../controllers/itemEntry-controller')
const productController = require('../controllers/product-controller')
const providerController = require('../controllers/provider-controller')

// Carryings
routes.get('/carryings', carryingController.list)
routes.get('/carrying/:id', carryingController.show)
routes.post('/carrying', carryingController.create)
routes.patch('/carrying/:id', carryingController.update)
routes.delete('/carrying/:id', carryingController.destroy)

// Custumers
routes.get('/customers', customerController.list)
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

// Items Departures
routes.get('/items/departures', itemDepartureController.list)
routes.get('/items/departure/:id', itemDepartureController.show)
routes.post('/items/departure', itemDepartureController.create)
routes.patch('/items/departure/:id', itemDepartureController.update)
routes.delete('/items/departure:id', itemDepartureController.destroy)

// Items Entries
routes.get('/items/entries', itemEntryController.list)
routes.get('/items/entry/:id', itemEntryController.show)
routes.post('/items/entry', itemEntryController.create)
routes.patch('/items/entry/:id', itemEntryController.update)
routes.delete('/items/entry:id', itemEntryController.destroy)

// Products
routes.get('/products', productController.list)
routes.get('/product/:id', productController.show)
routes.post('/product', productController.create)
routes.patch('/product/:id', productController.update)
routes.delete('/product/:id', productController.destroy)

// Providers
routes.get('/providers', providerController.list)
routes.get('/provider/:id', providerController.show)
routes.post('/provider', providerController.create)
routes.patch('/provider/:id', providerController.update)
routes.delete('/provider/:id', providerController.destroy)

module.exports = routes;

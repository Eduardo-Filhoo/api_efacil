const routes = require("express").Router();
const productController = require('../controllers/product-controller')
const costumerController = require('../controllers/customer-controller')
const providerController = require('../controllers/provider-controller')
const receiptController = require('../controllers/receipt-controller')
const itemController = require('../controllers/items-controller')

// Products
routes.get('/products', productController.list)
routes.get('/product/:id', productController.show)
routes.post('/add-product', productController.create)
routes.patch('/product/:id', productController.update)
routes.delete('/product/:id', productController.destroy)

// Costumers
routes.get('/costumers', costumerController.list)
routes.get('/costumer/:id', costumerController.show)
routes.post('/add-costumer', costumerController.create)
routes.patch('/costumer/:id', costumerController.update)
routes.delete('/costumer/:id', costumerController.destroy)

// Providers
routes.get('/providers', providerController.list)
routes.get('/provider/:id', providerController.show)
routes.post('/add-provider', providerController.create)
routes.patch('/provider/:id', providerController.update)
routes.delete('/provider/:id', providerController.destroy)

// Products
routes.get('/receipts', receiptController.list)
routes.get('/receipt/:id', receiptController.show)
routes.post('/add-receipt', receiptController.create)
routes.patch('/receipt/:id', receiptController.update)
routes.delete('/receipt/:id', receiptController.destroy)

// Products
routes.get('/items', itemController.list)
routes.get('/item/:id', itemController.show)
routes.post('/add-item', itemController.create)
routes.patch('/item/:id', itemController.update)
routes.delete('/item/:id', itemController.destroy)

module.exports = routes;

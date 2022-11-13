const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const api = express()

// Cors
api.use(cors())

// Express
api.use(express.json());
api.use(express.urlencoded({ extended: true }))

// Routes
api.use(routes)

// Erros
api.use((req, res, next) => {
  res.status(404).json({ error: "Página não Encontrada" })
});

module.exports = api

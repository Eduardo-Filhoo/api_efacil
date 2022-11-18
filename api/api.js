const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const api = express()

api.use(cors())
api.use(express.json());
api.use(express.urlencoded({ extended: true }))
api.use('/api/', routes)

api.use((req, res, next) => {
  res.status(404).json({ error: "Página não Encontrada" })
});

module.exports = api

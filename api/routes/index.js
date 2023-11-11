const express = require('express')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const categoriesRouter = require('./categories.router')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  app.use('/api/products', productsRouter)
  app.use('/api/users', usersRouter)
  app.use('/api/categories', categoriesRouter)
}

module.exports = routerApi

const express = require('express');
const getProducts  = require('./getProducts');
const getProduct = require('./getProduct')

const app = express()

app.get('api/product/:id', getProduct)

app.get('/api/products', getProducts)

app.listen(3006, () => {
    console.log('yeet')
})
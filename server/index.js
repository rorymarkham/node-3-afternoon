require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
const products_controller = require('./products_controller')


massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => {
        console.log(`theres a snake in my boot on ${SERVER_PORT}`)
    })

})
.catch(err => console.log(err))

app.use(express.json())

app.post('/api/products', products_controller.createProduct)
app.get('/api/products', products_controller.getAllProducts)
app.get('/api/product/:id', products_controller.getOneProduct)
app.put('/api/products/:id', products_controller.updateProduct)
app.delete('/api/products/:id', products_controller.deleteProduct)

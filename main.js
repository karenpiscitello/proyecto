const express = require('express')
const Contenedor = require('proyecto/main')

const app = express()

const PORT = 8080

app.get('', (require, resp) => {
    resp.send({ mensaje: 'Bienvenidos al curso'})
})

app.get('/productos', (require, resp) => {
    const contenedor = new Contenedor('productos.txt')
    contenedor.getRandom()
    resp.send('Endpoint de productos')
})

app.get('/randomproductos', (require, resp) => {
    resp.send('Endpoint de random productos')
})

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on('error', (error) => console.log(`Error en servidor: ${error}`))
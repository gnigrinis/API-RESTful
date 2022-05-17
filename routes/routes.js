const express = require('express');
const router = express.Router();

const Productos = require('../api/productos');
const productos = new Productos();

router.post('/productos', (req, res) => {
    const data = productos.save(req.body.title, req.body.price, req.body.thumbnail);
    const id = data[1];
    return res.json({ status: 'Saved', id: id });
})

router.get('/productos/:id', (req, res) => {
    let id = req.params.id;
    let producto = productos.getByID(id);
    if (producto == null) {
        res.send({ error: "Producto no encontrado" })
    } else {
        res.json(producto)
    }
})

router.get('/productos', (req, res) => {
    let listado = productos.getAll();
    if (listado.length === 0) {
        res.send({ error: "No hay productos cargados" })
    } else {
        return res.json(listado);
    }
})

router.put('/productos/:id', (req, res) => {
    let id = req.params.id;
    let producto = productos.getByID(id);
    if (producto == null) {
        res.send({ error: "Producto no encontrado" })
    } else {
        productos.delete(id);
        productos.update(id, req.body.title, req.body.price, req.body.thumbnail);
        res.send({ status: "Producto actualizado" })
    }
})


router.delete('/productos/:id', (req, res) => {
    productos.delete(req.params.id);
    return res.json({ status: 'Deleted'});
})

module.exports = router;
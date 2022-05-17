const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const node = app.listen(8080, () => {
  console.log(`servidor escuchando en http://localhost:8080`);
});

const router = require('./routes/routes');
app.use('/api', router);


node.on('error', error => {
    console.log('error en el servidor:', error);
});


module.exports = node;
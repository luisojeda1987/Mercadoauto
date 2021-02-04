const express = require('express');
const router = express.Router(); //traigo el metodo Router

const indexController = require('../controllers/indexController');

router.get('/',indexController.index);

module.exports = router;
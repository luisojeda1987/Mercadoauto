const express = require('express');
const router = express.Router(); //traigo el metodo Router

const {index, search, show} = require('../controllers/autosController'); //Maximo me enseñó destructuring nivel dios

router.get('/',index);
router.get('/show/:id',show);
router.get('/search',search)


module.exports = router; 
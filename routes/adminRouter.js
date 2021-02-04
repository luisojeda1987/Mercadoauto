const express = require('express');
const router = express.Router();
const path = require('path');
const validationRegisterAdmin = require('../validations/validationRegisterAdmin');
const validationLoginAdmin = require('../validations/vadlidationLoginAdmin');

const adminCheck = require('../middlewares/adminCheck');

const {createCar,deleteCar,editCar,listCar,storeCar,updateCar,index, register, processRegister, login, processLogin, logout} = require('../controllers/adminController');

const upload = require('../utils/multerAutos')

router.get('/index',adminCheck, index);

//login y register
router.get('/register',register);
router.post('/register',validationRegisterAdmin, processRegister);

router.get('/login',login);
router.post('/login',validationLoginAdmin, processLogin);

router.get('/logout',logout);

//autos
router.get('/autos/list',adminCheck,listCar);

router.get('/autos/create',adminCheck,createCar);
router.post('/autos/store',upload.any(),storeCar);

router.get('/autos/edit/:id',adminCheck,editCar);
router.put('/autos/update/:id',upload.any(),updateCar);

router.delete('/autos/delete/:id',deleteCar);



module.exports = router;
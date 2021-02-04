const {check, body} = require('express-validator');

module.exports = [
    check('username')
    .notEmpty()
    .withMessage('El username es requerido'),

    check('pass')
    .notEmpty()
    .withMessage('La contraseña es requerida')
]
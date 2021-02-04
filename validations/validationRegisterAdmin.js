const {check, body} = require('express-validator');
const {getAdmins}= require('../data/admins');

const admins = getAdmins();


module.exports = [
    check('username')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('pass')
    .isLength({
        min:3, 
        max:12
    })
    .withMessage('mínimo de 8, máximo de 12'),

    body('username').custom(value => {
        let result = admins.find(admin => admin.username === value.trim());
        if(result){
            return false
        }else{
            return true
        }
    })
    .withMessage('El username está en uso')
]
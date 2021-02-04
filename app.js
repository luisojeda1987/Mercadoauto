/* VARIABLES E IMPORTACIONES */
const express = require('express'); //requiero el modulo de express
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const app = express();
const port = 4000;

const localsCheck = require('./middlewares/localsCheck');
const cookieCheck = require('./middlewares/cookieCheck');


const indexRouter = require('./routes/indexRouter');
const autosRouter = require('./routes/autosRouter');
const sucursalesRouter = require('./routes/sucursalesRouter');
const adminRouter = require('./routes/adminRouter');

/* CONFIGURACIONES */
app.set('view engine','ejs'); //le digo a express que el motor de vistas es EJS
app.set('views',__dirname + '/views'); //configuro la carpeta donde van a estar guardadas las vistas

app.use(express.static(__dirname + '/public')); //configuro los recursos estaticos

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(session({
    secret : "mercadoAuto for ever!!"
}));
app.use(cookieParser());

app.use(localsCheck);
app.use(cookieCheck);

/* RUTAS */
app.use('/',indexRouter);
app.use('/autos',autosRouter);
app.use('/sucursales',sucursalesRouter);
app.use('/admin',adminRouter);



// catch 404 and forward to error handler
app.use((req, res, next) =>{
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

    res.render('error',{
        title: err.message,
        message : err.message,
        status : err.status,
        stack : err.stack
    });
});




app.listen(port,()=>console.log('El servidor está corriendo en el puerto ' + port))
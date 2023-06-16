var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product')
var searchresultsRouter = require('./routes/search-results')


var app = express();

/* configuracion para que la sesion se inicie */
app.use(session({
  secret:'MMmotors',
  resave: false,
  saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Configuracion de locals
 app.use(function (req,res,next) {

  if (req.session.usuario != undefined) {
    res.locals.usuario = req.session.usuario //si el usuario esta en sesion, me lo pasa a la variable locals. en locals puedo manipular la info en el ejs. 
    //locals es la variable disponible para pasarle la informacion al ejs. la trae express.
    return next()
  }
  return next()

 });

app.use(function(req,res,next){
  if (req.cookies.userId != undefined && req.session.usuario == undefined) {
    let idUsuarioEnCookie = req.cookies.userId;
    db.Usuario.findByPk(idUsuarioEnCookie)
    .then((usuario) =>{
      req.session.usuario = usuario.dataValues;
      res.locals.usuario = usuario.dataValues

      return next();
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    return next()
  }
})



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/search-results', searchresultsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

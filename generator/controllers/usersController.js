const datos = require("../data/data")
const data = require('../database/models');
const bcrypt = require('bcryptjs');
const usuarios = data.Usuario
 


var userController = {

    store: function(req,res) {
        let info = req.body /* trae toda la info del formulafrio */
        
        let userStore = {
            usuario: info.usuario,
            email: info.email,
            contraseña: bcrypt.hashSync(info.contraseña, 10),
            foto_perfil: info.foto_perfil,
            fecha_nacimiento: info.fecha_nacimiento,
            DNI: info.DNI
            

        }
        
        usuarios.create(userStore)
        .then(function (result) {
            return res.redirect('/users/login');
        })

        .catch(function (error) {
            console.log(error);
        })

        
    },


    login: function(req, res){
        res.render('login')
    },


    loginPost: function(req, res){

        let emailBuscado = req.body.email
        let pass = req.body.contraseña

        let filtrado = {
            where: [{email: emailBuscado}] //para que el campo email de mi modelo coincida con el email del usuario
        }

        usuarios.findOne(filtrado)
        .then(function (result) {
            if (result != null) {
                let claveCorrecta = bcrypt.compareSync(pass, result.contraseña)

                if (claveCorrecta) {
                    //poner un usuario en sesion
                    req.session.user = result.dataValues;  //Datavalues trae solo los resultados de la tabla, lo estoy guardando en session en una propiedad llamada user

                    //si tildo recordarme, creamos la cookie
                    if (req.body.remember != undefined) {
                        res.cookie('userID', result.id, {maxAge: 1000 * 60 * 15} )
                    } 

                    return res.redirect('/') 
                } else {
                    return res.send('mail bien y password mal')
                }
            } else {
                return res.send('mail mal')
            }
            
        })
        .catch(function (error) {
            console.log(error);
        })

        
    },
    

    register:function(req,res){
        res.render('register')
    },

    profile: function(req, res){
        res.render('profile', {
            usuario:datos.usuario,
            productos:datos.productos,
        })
    },

    edit: function(req, res){
        res.render('profile-edit', {
            usuario:datos.usuario,
        })
    },
}

module.exports = userController

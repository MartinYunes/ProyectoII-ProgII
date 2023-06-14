const datos = require("../data/data")
const data = require('../database/models');
const bcrypt = require('bcryptjs')
const usuarios = data.Usuario
 


var userController = {
    login: function(req, res){
        res.render('login')
    },

    loginPost: function(req,res) {

        let email = req.body.email;
        let contraseña = req.body.contraseña
        let filtrado = {
            where: [{mail: email}]
        };

        usuarios.findOne(filtrado)
        .then((result) => {
            if (result != null) {
                let clave_correcta = bcrypt.compareSync(contraseña, result.contraseña)
                if(clave_correcta){
                    req.session.usuario = result.dataValues
                    if(req.body.remember != undefined){
                        res.cookie('userId', result.id, {maxAge: 1000 * 60 * 15})
                    }
                    return res.redirect('/');
                } else{
                    return res.send('Contraseña erronea')
                }
                }else{
                return res.send('Este mail no existe')
            }
        })
        .catch((err) => {
            console.log(err);
        })

        
        
    },

    register:function(req,res){
        res.render('register')
    },

    registerPost: function(req, res) {
        let info = req.body;
    
        let userStore = {
            usuario: info.usuario,
            mail: info.mail,
            password: bcrypt.hashSync(info.password, 10),
            foto_de_perfil: info.foto_de_perfil,
            fecha_de_nacimiento: info.fecha_de_nacimiento,
            dni: info.dni,
        }
        // Hacer el create con el modelo para guardar el registro en la base de datos, siempre usando del trycatch
        usuarios.create(userStore)
        .then(function(result) {

            return res.redirect('/users/login')
            
        })
        .catch(function(error) {

            console.log(error);
            
        })

        
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

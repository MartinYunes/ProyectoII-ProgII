const datos = require("../data/data")
const data = require('../database/models');
const bcrypt = require('bcryptjs')
const usuarios = data.Usuario
 


var userController = {

    store: function(req,res) {
        let info = req.body /* trae toda la info del formulafrio */
        
        let userStore = {
            usuario: info.usuario,
            email: info.email,
            contraseña: info.contraseña,
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
        res.redirect('/users/profile')
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

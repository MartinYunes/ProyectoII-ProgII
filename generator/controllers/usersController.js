const datos = require("../data/data")
const data = require('../database/models');
const usuarios = data.Usuario



var userController = {
    login: function(req, res){
        res.render('login')
    },
    login_post: function (req,res) {

        
    },

    register: function(req, res){
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

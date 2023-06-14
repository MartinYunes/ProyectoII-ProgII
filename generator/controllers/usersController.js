const datos = require("../data/data")
const data = require('../database/models');
const bcrypt = require('bcryptjs')
const usuarios = data.Usuario
 


var userController = {

    store: function(req,res) {
        return res.redirect('/users/login')
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

const datos = require("../data/data")

var userController = {
    login: function(req, res){
        res.render('login')
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
        res.render('profile-edit')
    },
}

module.exports = userController

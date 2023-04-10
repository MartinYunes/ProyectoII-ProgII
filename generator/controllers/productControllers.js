let datos = require('../data/data')

let productController = {
    detail: function(req, res){
        return res.render('product')
    },

    add: function(req, res){
        return res.render('product-add', {
            infoUsuario: datos.usuario
        })
    },
    edit: function(req, res){
        return res.render('product-add', {
            infoUsuario: datos.usuario
        })
    },

}

module.exports = productController


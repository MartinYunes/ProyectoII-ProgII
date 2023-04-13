let datos = require('../data/data')

let productController = {
    detail: function(req, res){
        return res.render('product', {
            products:datos.productos,
            comments:datos.comentarios,      
        })
    },

    add: function(req, res){
        return res.render('product-add', {
            infoUsuario: datos.usuario
        })
    },
   

}

module.exports = productController;


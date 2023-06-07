let datos = require('../data/data')
let db = require('../database/models');


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
    index: function (req,res) {
        db.Producto.findAll()
            .then(function(data){

            })
            .catch(function(error){
                
            })
    }
   

}

module.exports = productController;


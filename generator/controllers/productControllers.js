let datos = require('../data/data')
let db = require('../database/models');
const producto = db.Producto
let op = db.Sequelize.Op


let productController = {

    detail: function(req, res){

        let id = req.params.id;
        let rel = {
            include: [{association: 'comentarios'}]
        }

        producto.findByPk(id, rel)
            .then(function(resultado){
                //res.send(resultado)
                return res.render('product', {producto:resultado})
            })
            .catch(function (error) {
                console.log(error)
              });

        
    },

    add: function(req, res){
        return res.render('product-add', {
            infoUsuario: datos.usuario
        })
    },
    

}

module.exports = productController;
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
                res.send(resultado)
                return res.render('product', {productos:resultado})
            })

        
    },

    add: function(req, res){
        return res.render('product-add', {
            infoUsuario: datos.usuario
        })
    },
    index: function (req,res) {
        db.Producto.findByPk()
            .then(function(data){

            })
            .catch(function(error){
                
            })
    }
   

}

module.exports = productController;


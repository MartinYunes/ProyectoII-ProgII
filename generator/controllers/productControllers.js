let datos = require('../data/data')
let db = require('../database/models');
const producto = db.Producto
let op = db.Sequelize.Op


let productController = {

    detail: function(req, res){

        let id = req.params.id;
        let rel = {
            include: [{
                association: 'comentarios', include:[{association:'usuario'}]
            }]
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

    comentarios: (req,res)=> {
        let datos = req.params.id;
        let informacion = req.body;
      
        console.log(informacion) // para ver que se cargue el comentario correctamente
        db.Comentario.create(informacion)
          .then((devolucion) => {
            return res.render("product")
          }).catch((error) => {
            console.log(error)
          })  
      }
}

module.exports = productController;
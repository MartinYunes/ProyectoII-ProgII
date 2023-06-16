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

    editar: (req,res) => {
      let id= req.params.id;
      producto.findByPk(id)
      .then((devolucion) => {
        console.log(devolucion);
        return res.render("edit-product", {producto:devolucion})
      })
      .catch((error) => {
        console.log(error)
      })
    },

    saveEdit: (req,res) =>{
      let id= req.params.id;
      let data= req.body;
      producto.update(data, {
        where: [
          {id:id}
        ]
      })
      .then((devolucion) => {
        return res.redirect("/product/id/" + id)
      })
      .catch((error) => {
        console.log(error);
      });
      
    },  

    eliminar: (req,res) =>{
      let id_destructor= req.body.id
      producto.destroy({
        where: [
          {id:id_destructor}
        ]
      })
      .then((devolucion) => {
        return res.redirect("/")
      })
      .catch((error) => {
        console.log(error);
      });
      
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
    },
    store: function (req,res) {
      let info = req.body;
      console.log(info);

      db.producto.create(info)

      .then((devolucion) => {
          return res.redirect('/')
        })
      .catch(function (error) {
          console.log(error);
      })
    }

      
}

module.exports = productController;
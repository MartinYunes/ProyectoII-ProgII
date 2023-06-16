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

        console.log(informacion);
      
        //console.log(informacion) // para ver que se cargue el comentario correctamente
        db.Comentario.create({
          id_usuario: req.session.usuario.id,
          post_id: datos,
          texto: informacion.texto,
        })
          .then((devolucion) => {
            return res.redirect('/product/id/'+datos)
          }).catch((error) => {
            console.log(error)
          })  
    },

    add: function(req, res){
      return res.render('product-add', {
         
      })
  },

    
      store: function(req,res) {
        let info = req.body /* trae toda la info del formulafrio */

        console.log(info);
        
        let userStore = {
            nombre_producto: info.nombre_producto,
            descripcion_producto: info.descripcion_producto,
            imagenes: info.imagenes

        }
        
        producto.create(userStore)
        .then(function (result) {
            return res.redirect('/');
        })

        .catch(function (error) {
            console.log(error);
        })

        
      }}
    

      


module.exports = productController;
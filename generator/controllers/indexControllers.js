const data = require('../data/data')
let db = require('../database/models')

const indexController = {
    index: function(req,res){

        db.Producto.findAll()
        .then(function(result){
            res.render('index', {
                products: result, //esto busca y envia los datos y los manipulamos en el ejs con variable lista
                
            })
        })
        .catch(function(error){
            console.log(error);
        })

        
    }
}

module.exports = indexController;

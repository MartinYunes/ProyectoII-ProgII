const data = require('../data/data')

const indexController = {
    index: function(req,res){
        res.render('index', {
            productos: data.productos,
            usuarioLogueado: false,
        })
    }
}

module.exports = indexController;

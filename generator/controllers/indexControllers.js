const data = require('../data/data')

const indexController = {
    index: function(req,res){
        return res.render('index', {
            productos: data.productos,
            usuarioLogueado: false,
        })
    }
}

module.exports = indexController;

const data = require('../data/data')

const indexController = {
    index: function(req,res){
        return res.render('index', {
            productos: data.productos,
          
        })
    }
}

module.exports = indexController;

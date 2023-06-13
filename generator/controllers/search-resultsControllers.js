let datos = require('../data/data')
let db = require('../database/models');
const producto = db.Producto
let op = db.Sequelize.Op


let resultsController = {
    searchResults: function(req, res) {

        let busqueda = req.query.search

        producto.findAll({
            where: [
                 {nombre_producto: busqueda}
                //{title: {[op.like]: `%${busqueda}%`}}
            ]
        })
        .then(function (result) {
            return res.render('search-results', {list: result})
        })
        .catch(function (error) {
            console.log(error);
        })
        //res.render('search-results', {list:datos.productos});
    }
}
module.exports = resultsController

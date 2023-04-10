let datos = require('../data/data')

let resultsController = {
    searchResults: function(req, res) {
        res.render('search-results', {list:datos.productos});
    }
}
module.exports = resultsController
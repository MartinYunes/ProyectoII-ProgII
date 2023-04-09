var userController = {
    login: function(req, res){
        res.send('Aca mandamos el login')
    },

    register: function(req, res){
        res.send('Aca mandamos el register')
    },

    profile: function(req, res){
        res.send('Aca mandamos el profile')
    },

    edit: function(req, res){
        res.send('Aca mandamos el edit')
    },
}

module.exports = userController
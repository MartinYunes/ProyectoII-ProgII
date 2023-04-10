var userController = {
    login: function(req, res){
        res.render('Login')
    },

    register: function(req, res){
        res.render('Register')
    },

    profile: function(req, res){
        res.render('Profile')
    },

    edit: function(req, res){
        res.render('Profile edit')
    },
}

module.exports = userController

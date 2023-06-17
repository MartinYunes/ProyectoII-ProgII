const datos = require("../data/data")
const data = require('../database/models');
const bcrypt = require('bcryptjs');
const usuarios = data.Usuario
 


var userController = {

    register:function(req,res){
        res.render('register')
    },

    store: function(req,res) {

        let errors = {}
        if (req.body.email == '') {
            errors.message = 'El email no puese estar vacio'
            res.locals.errors = errors;
            return res.render('register')
        } else if(req.body.contraseña == ''){
            errors.message = 'La contraseña es obligatoria!'
            res.locals.errors = errors;
            return res.render('register')
        }
        
        
        
        else{
            let info = req.body /* trae toda la info del formulafrio */
        
            let userStore = {
                usuario: info.usuario,
                email: info.email,
                contraseña: bcrypt.hashSync(info.contraseña, 10),
                foto_perfil: info.foto_perfil,
                fecha_nacimiento: info.fecha_nacimiento,
                DNI: info.DNI
            }
        
            usuarios.create(userStore)
            .then(function (result) {
                return res.redirect('/users/login');
            })

            .catch(function (error) {
                console.log(error);
            })
        }
        
    },


    login: function(req,res){
        if (req.session.usuario != undefined) { //control de validaciones
            return res.redirect('/')
        }else{
            res.render('login')
        }
        
    },


    loginPost: function(req, res){

        let emailBuscado = req.body.email
        let pass = req.body.contraseña
        let filtrado = {
            where: [{email: emailBuscado}] //para que el campo email de mi modelo coincida con el email del usuario
        }

        usuarios.findOne(filtrado)
        .then(function (result) {
            if (result != null) {
                let claveCorrecta = bcrypt.compareSync(pass, result.contraseña)

                if (claveCorrecta) {
                    //poner un usuario en sesion
                    req.session.usuario = result.dataValues;  //Datavalues trae solo los resultados de la tabla, lo estoy guardando en session en una propiedad llamada user

                    //si tildo recordarme, creamos la cookie
                    if (req.body.remember != undefined) {
                        res.cookie('userID', result.id, {maxAge: 1000 * 60 * 15} )
                    } 

                    return res.redirect('/') 
                } else {
                    errorLogin.message = 'password incorrecta'
                    return res.render('login')
                }
            } else {
                errorLogin.message = 'Email incorrecta'
                    return res.render('login')
            }
            
        })
        .catch(function (error) {
            console.log(error);
        })

        
    },
    

  

    profile: function(req, res){
        let id = req.params.id
                            
        //creo realcion
        let rel2=  {
            include: [{association: "comentarios"},{association: "productos"}], 
            order: [['createdAt', 'ASC'] ]} 

    //filtro por PK
    usuarios.findByPk(id,rel2)
        .then(function(result){
            console.log(result)
        
            return res.render('profile', {
                datosUsuario: result})

        })
        .catch( function(error){
            console.log(error);
        })   

    },

    edit: function(req, res){
        res.render('profile-edit', {
            usuario:datos.usuario,
        })
    },

    destroy: (req,res) => {

        req.session.usuario=null
        res.clearCookie('userId')

        return res.redirect("/users/login")
    }
}



module.exports = userController

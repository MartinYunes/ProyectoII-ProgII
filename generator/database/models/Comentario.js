module.exports = function(sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        post_id:{
            type: dataTypes.INTEGER
        } ,
        user_id:{
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        }
    };
    let config ={ 
        tableName: 'comentarios',
        
    };
    let comentarios = sequelize.define(alias, cols, config);
    comentarios.associate = function(models){
        comentarios.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "post_id"
        }),
        comentarios.belongsTo(models.Usuario, {
            as : "usuario",
            foreignKey: "user_id"
        })
        ;
        
    }
    return comentarios
}
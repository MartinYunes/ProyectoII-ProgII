module.exports = function(sequelize, DataTypes){
    let alias = 'Producto'; //nombre del modelo en el controlador

    let cols = {
        id: {

            autoIncrement : true, 
            primaryKey : true,
            type : DataTypes.INTEGER
        }
        
        ,id_usuario: {
            type: DataTypes.STRING
        },

        nombre_producto: {
            type: DataTypes.STRING

        },
        descripcion_producto: {
            type: DataTypes.STRING
        },

        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt:{
            type: DataTypes.DATE
        },
    }
    let config = {
        tableName: 'productos',
        timestamps: false,
    }


let producto = sequelize.define(alias, cols, config);

producto.associate = function(models){
    producto.belongsTo(models.Usuario, {
        as: 'usuario',
        foreignKey: 'id_usuario'
    }),
    producto.hasMany(models.Comentario, {
        as: 'comentarios',
        foreignKey: "post_id"
    })
} 

return producto


}
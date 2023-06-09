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
        descripcio_producto: {
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
        underscored: true  
    }


let producto = sequelize.define(alias, cols, config);
return producto


}
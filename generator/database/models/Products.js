module.exports = function(sequelize, DataTypes){
    let alias = 'Producto'; //nombre del modelo en el controlador

    let cols = {
        id: {

            autoIncrement : true, 
            primaryKey : true,
            type : dataTypes.INTEGER
        }
        
        ,id_usuario: {
            type: dataTypes.STRING
        },

        nombre_producto: {
            type: dataTypes.STRING

        },
        descripcio_producto: {
            type: dataTypes.STRING
        },

        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
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
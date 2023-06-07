module.exports = function(sequelize, DataTypes){
    let alias = 'Producto'; //nombre del modelo en el controlador

    let cols = {
        id: {

            autoIncrement : true, 
            primaryKey : true,
            type : dataTypes.INTEGER
        }
        
        ,name: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: false,
        underscored: true
    }


let producto = sequelize.define(alias, cols, config);
return producto


}
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servings: {
      type: DataTypes.STRING,
    },
    steps: {
      type: DataTypes.TEXT,
    },
    healthyness:{
      type: DataTypes.INTEGER
    },
    score:{
      type: DataTypes.INTEGER
    }
    
  },
  {
    timestamps: false
  }
  );
};

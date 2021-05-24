const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Userskill extends Model {}

Userskill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'day', 
  }
);

module.exports = Userskill;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },  
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
{
  sequelize,
  modelName: 'book',
  timestamps: false,
  }
);

module.exports = Book;
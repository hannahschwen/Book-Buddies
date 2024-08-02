const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_Club extends Model {
}

User_Club.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },  
    club_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'club',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user_club'
  }
);

module.exports = User_Club;
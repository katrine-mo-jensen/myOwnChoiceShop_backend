import { DataTypes, Model } from 'sequelize';
import db from '../config/db.sequelize.js';

class BrandModel extends Model {}

BrandModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db.sequelize, // Use the sequelize instance from db.sequelize
  modelName: 'brand',
  freezeTableName: true,
  underscored: true
});

export default BrandModel;

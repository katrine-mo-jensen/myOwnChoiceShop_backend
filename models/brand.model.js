import db from '../config/db.sequelize.js';
import { DataTypes, Model } from 'sequelize';

class BrandModel extends Model {}

BrandModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db.sequelize, // Use the sequelize property from the db object
    modelName: 'brand',
    freezeTableName: true,
    underscored: true,
  }
);

export default BrandModel;

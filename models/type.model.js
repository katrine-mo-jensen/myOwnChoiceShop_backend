import sequelize from "../config/db.sequelize.js";
import { DataTypes, Model } from "sequelize";

class TypeModel extends Model {}

TypeModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'type',
  freezeTableName: true,
  underscored: true
});

export default TypeModel;

import sequelize from "../config/db.sequelize.js";
import { DataTypes, Model } from "sequelize";

class TasteModel extends Model {}

TasteModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  taste: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'taste',
  freezeTableName: true,
  underscored: true
});

export default TasteModel;

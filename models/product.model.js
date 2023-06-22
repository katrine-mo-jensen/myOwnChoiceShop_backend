import { sequelize } from "../config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class productModel extends Model {}

productModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Untitled",
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "product",
    freezeTableName: true,
    underscored: true,
    // createdAt: 'created',
    // updatedAt: false
  }
);

export default productModel;
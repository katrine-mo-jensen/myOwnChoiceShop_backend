import db from "../config/db.sequelize.js";
import { DataTypes, Model } from "sequelize";

class ProductModel extends Model {}

ProductModel.init(
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
    sequelize: db.sequelize, 
    modelName: "product",
    freezeTableName: true,
    underscored: true,
  }
);

export default ProductModel;

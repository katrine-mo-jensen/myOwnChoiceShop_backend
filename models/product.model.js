import sequelize from "../config/db.sequelize.js";


import { Sequelize, DataTypes, Model } from "sequelize";

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

  },
  {
    sequelize, 
    modelName: "products",
    freezeTableName: true,
    underscored: true,
  }
);

export default ProductModel;

import {sequelize} from "../config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class productModel extends Model {}

// In diagram there are a datatype; varchar. Unsure what it is in VS code? 

productModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Untitled",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Coming soon",
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    taste_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize, 
    modelName: "products",
    freezeTableName: true,
    underscored: true,
  }
);

export default productModel;

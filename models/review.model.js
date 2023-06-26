import {sequelize} from "../config/db.sequelize.js";
import { DataTypes, Model } from "sequelize";

class ReviewModel extends Model {}

// In diagram there are a datatype; varchar. Unsure what it is in VS code? 

ReviewModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize, 
    modelName: "review",
    freezeTableName: true,
    underscored: true,
  }
);

export default ReviewModel;

import ProductModel from "../models/product.model.js";
import ReviewModel from "../models/review.model.js";

// relations
ProductModel.hasMany(ReviewModel)
ReviewModel.belongsTo(ProductModel)

class ProductController {
  constructor() {
    console.log("Class productController instantiated");
  }

  list = async (req, res) => {
    let { limit, attributes } = req.query;
    limit = parseInt(limit) || 1000;
    const attr = attributes
      ? attributes.split(",")
      : new Array(
          "id",
          "title",
          "description",
          "size",
          "img",
          "stock",
          "price"
        );

    const result = await ProductModel.findAll({
      attributes: attr,
      limit: limit,
    });
    res.json(result);
  };
  // details
  details = async (req, res) => {
    console.log("Kører details metode");
    const { id } = req.params || 0;
    const result = await ProductModel.findOne({
      attributes: [
        "id",
        "title",
        "description",
        "size",
        "img",
        "stock",
        "price",
      ],
      where: { id: id },
    });
    res.json(result);
    // return true
  };

  // create
  create = async (req, res) => {
    console.log("Kører create metode");
    const {
      item_number,
      title,
      description,
      stock,
      taste_id,
      brand_id,
      type_id,
      size,
      img,
      price,
    } = req.body;

    if (
      item_number &&
      title &&
      description &&
      stock &&
      taste_id &&
      brand_id &&
      type_id &&
      size &&
      img &&
      price
    ) {
      const model = await ProductModel.create(req.body);
      res.json({ newid: model.id });
    } else {
      res.sendStatus(418);
    }
    // return true
  };
  // update
  update = async (req, res) => {
    console.log("Kører update metode");
    const { id } = req.params || 0;
    const {
      item_number,
      title,
      description,
      stock,
      taste_id,
      brand_id,
      type_id,
      size,
      img,
      price,
    } = req.body;

    if (
      item_number ||
      title ||
      description ||
      stock ||
      taste_id ||
      brand_id ||
      type_id ||
      size ||
      img ||
      price
    ) {
      const model = await ProductModel.update(req.body, {
        where: { id: id },
      });
      res.json({
        msg: "Product updated",
      });
    } else {
      res.sendStatus(418);
    }
    // return true
  };

  // delete
  delete = async (req, res) => {
    console.log("Kører delete metode");
    try {
      await ProductModel.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      res.send(err);
    }
    // return true
  };
}

export default ProductController;

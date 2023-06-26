import UserModel from "../models/user.model.js";
import ReviewModel from "../models/review.model.js";

// relations
UserModel.hasMany(ReviewModel)
ReviewModel.belongsTo(UserModel)

const model = new ReviewModel();

class ReviewController {
  constructor() {
    console.log("Class ReviewController instantiated");
  }

  list = async (req, res) => {
    let { limit, attributes } = req.query;
    limit = parseInt(limit) || 1000;
    const attr = attributes
      ? attributes.split(",")
      : new Array(
          "id",
          "date",
          "user_id",
          "comment",
          "title",
          "rating",
          "product_id"
        );

    const result = await ReviewModel.findAll({
      attributes: attr,
      limit: limit,
    });
    res.json(result);
  };
  // details
  details = async (req, res) => {
    console.log("Kører details metode");
    const { id } = req.params || 0;
    const result = await model.findOne({
      attributes: [
        "id",
        "date",
        "user_id",
        "comment",
        "title",
        "rating",
        "product_id"
      ],
      where: { id: id },
    });
    res.json(...result);
    // return true
  };

  // create
  create = async (req, res) => {
    console.log("Kører create metode");
    const {
      date,
      user_id,
      comment,
      title,
      rating,
      product_id,
    } = req.body;

    if (
      date &&
      user_id &&
      comment &&
      title &&
      rating &&
      product_id 
    ) {
      const model = await model.create(req.body);
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
      date,
      user_id,
      comment,
      title,
      rating,
      product_id,
    } = req.body;

    if (
      date ||
      user_id ||
      comment ||
      title ||
      rating ||
      product_id
    ) {
      const model = await model.update(req.body, {
        where: { id: id },
      });
      res.json({
        msg: "review updated",
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
      await model.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      res.send(err);
    }
    // return true
  };
}

export default ReviewController;

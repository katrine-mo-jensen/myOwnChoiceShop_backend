import UserModel from "../models/user.model.js";

const model = new UserModel();

class UserController {
  constructor() {
    console.log("Class UserController instantiated");
  }

  list = async (req, res) => {
    let { limit, attributes } = req.query;
    limit = parseInt(limit) || 1000;
    const attr = attributes
      ? attributes.split(",")
      : new Array(
          "id",
          "username",
          "firstname",
          "lastname",
          "email"
        );

    const result = await UserModel.findAll({
      attributes: attr,
      limit: limit,
    });
    res.json(result);
  };
  // details
  details = async (req, res) => {
    console.log("Kører details metode");
    const { id } = req.params || 0;
    const result = await UserModel.findOne({
      attributes: [
        "id",
          "username",
          "password",
          "firstname",
          "lastname",
          "email",
          "address",
          "zipcode",
          "city",
          "phone_nr"
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
      username,
      password,
      firstname,
      lastname,
      email,
      address,
      zipcode,
      city,
      phone_nr,
  
    } = req.body;

    if (
      username &&
      password &&
      firstname &&
      lastname &&
      email &&
      address &&
      zipcode &&
      city &&
      phone_nr
    ) {
      const model = await UserModel.create(req.body);
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
      username,
      password,
      firstname,
      lastname,
      email,
      address,
      zipcode,
      city,
      phone_nr,
    } = req.body;

    if (
      username ||
      password ||
      firstname ||
      lastname ||
      email ||
      address ||
      zipcode ||
      city ||
      phone_nr
    ) {
      const model = await UserModel.update(req.body, {
        where: { id: id },
      });
      res.json({
        msg: "User updated",
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
      await UserModel.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      res.send(err);
    }
    // return true
  };
}

export default UserController;

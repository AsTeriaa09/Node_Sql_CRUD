const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");

router.route("/").get((req, res) => {
  res.send("working!");
});
router.route("/getuser").get(UserController.GetAllUsers);
router.route("/createuser").post(UserController.createUser);
router.route("/getbyid/:id").get(UserController.GetUserByID);
router.route("/update/:id").put(UserController.UpdateUser);
router.route("/delete/:id").delete(UserController.DeleteUser);

module.exports = router;

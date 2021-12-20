const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

//admin router
router.route("/admin")
  .get(UsersController.find_All)

router.route("/")
  .get(UsersController.find)

router.route("/:userId")
  .get(UsersController.find_One) 
  .put(UsersController.update_One) 
  .delete(UsersController.remove_One)  

module.exports = router;

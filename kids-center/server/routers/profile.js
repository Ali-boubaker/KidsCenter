const express = require("express");
const router = express.Router();

const ProfileController = require("../controllers/users");

router.route("/profile")
  .get(ProfileController.find_All)
  
router.route("/profile/:userId")
  .get(ProfileController.find_One) 
  .put(ProfileController.update_One) 
  .delete(ProfileController.remove_One)  

module.exports = router;

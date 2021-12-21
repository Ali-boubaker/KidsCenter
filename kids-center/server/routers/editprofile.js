const express = require("express");
const router = express.Router();

const editprofileController = require("../controllers/users");

  
router.route("/")
.post( editprofileController.update_One);
router
.route("/:userId")
  .get(editprofileController.find_One) 
  .put(editprofileController.update_One) 
  .delete(editprofileController.remove_One)  

module.exports = router;
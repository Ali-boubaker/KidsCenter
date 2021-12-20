const express = require("express");
const router = express.Router();

const EventsController = require("../controllers/events");

router.route("/").get(EventsController.find_All);
router.route("/comments").put(EventsController.delete_comment)
router.route("/filter").post(EventsController.find_One)


router
  .route("/events")
  .post(EventsController.create_One)
  .get(EventsController.find_One)
  .put(EventsController.update_One)
  .delete(EventsController.remove_One);

module.exports = router;

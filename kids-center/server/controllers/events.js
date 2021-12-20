const Events = require("../models/event");

module.exports = {
  create_One: async (req, res, next) => {
    const { title,eventBy, location, city, contact, date, event_img} =
      req.body;
    try {
      const event = await Events.create({
        title,
        eventBy,
        title,
        location,
        city,
        contact,
        date,
        event_img,
      });

      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  },
  find_All: async (req, res, next) => {
    try {
      const events = await Events.find({}).sort({createdAt: -1}).exec();
         
      res.status(200).json(events);
    } catch (error) {
      next(error);
    }
  },
  find_One: async (req, res, next) => {
    console.log("event/events ",req.body)
    try {
      const eventsFound = await Events.find({ city: req.body.city });
      console.log(eventsFound)
      res.status(200).json(eventsFound);
    } catch (error) {
      next(error);
    }
  },
  update_One: async (req, res, next) => {
    console.log("request", req.body);
    try {
      const event = await Events.findByIdAndUpdate(
        { _id: req.body._id },
        { $push: { comments: req.body.comment } },
        { new: true }
      );
      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  },
  remove_One: async (req, res, next) => {
    try {
      const removedEvent = await Events.findByIdAndRemove(req.params.EventId);
      res.status(200).json(removedEvent);
    } catch (error) {
      next(error);
    }
  },
  delete_comment: async (req, res, next) => {
   
    try {
      const removedComment = await Events.findOneAndUpdate({_id:req.body._id}, {$pull : {comments:req.body.comment}});
      res.status(200).json(removedComment);
    } catch (error) {
      next(error);
    }
  }
};

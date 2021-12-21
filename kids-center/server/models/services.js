var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
  category: { type: String },
  fullname: { type: String },
  username: { type: String },
  email   : { type: String },
  specialty:{ type: String},
  adresse : { type: String },
  city    : { type: String },
  phone   : { type: String, default : "" },
  connect : { type: Boolean, default: false },
  user_img: { type: String, default : "https://www.propertycentral.co.ke/assets/images/profiles/default.jpg" },
},{ timestamps: true });


//   "category":"serviceProvider",
// "fullname":"test,
// "specialty":"English",
// "username":"jess",
// "email":"jesser@gmail.com",
// "adresse":"tunis",
// "city":"tunis",
// "phone":55


var Service = mongoose.model('Service', serviceSchema);



module.exports = Service


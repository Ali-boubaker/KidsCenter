var express = require("express");
var app = express();
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const auth = require("./routers/auth.js");
const users = require("./routers/users.js");
const events=require("./routers/events.js")
const services = require("./routers/services.js")
const editprofile = require("./routers/editprofile.js");
var cors = require('cors');


// mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/user").then(res => console.log("mongoose connected !"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//age of the cookie
app.use(cookieSession({ 
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year in milliseconds
    keys: ['secret_key']
  })
);

//routes
app.use("/auth", auth); // /auth/signin or /auth/signup
app.use("/user", users); // /users (CRUD) /users/:userId (RUD)
app.use("/services", services);
app.use("/editprofile", editprofile);
// app.use("/api/ownerposts", ownerPosts); // /api/ownerposts (CRUD)
// app.use("/api/renterposts", renterPosts); // /api/renterposts (CRUD)
app.use("/events",events);

// 404 errors
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

// server listening
app.listen(8000, function () {
  console.log(`server listening on port: 8000 !`);
});


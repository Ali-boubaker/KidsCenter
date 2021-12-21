const router = require("express").Router();
const AuthController = require("../controllers/auth");

// auth login
router.post("/signin", AuthController.signin);

// signin / registration
router.post("/signup", AuthController.signup);

// auth logout (when a user click on logout)
router.get("/logout", (req, res) => {
     // handle with passport
     // res.send("logging out");
     req.logout(); // this method will kill the cookie life / make it expired
     res.redirect("/");
});

module.exports = router;

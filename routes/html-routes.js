const router = require("express").Router(); 
const path =require("path"); 

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
})
router.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
});
module.exports =router; 
// Requiring path to so we can use relative routes to our HTML files
//var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
//var isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function(app) {
  
//   app.get("/", function(req, res) {
//     if (req.user) {
//       res.redirect("/");
//     }
//     res.sendFile(path.join(__dirname, "../pub));
//   });

//   app.get("/signup", function(req, res) {
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

//   app.get("/members", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/members.html"));
//   });

//   app.get("/itinerary", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/itinerary.html"));
//   });

//   app.get("/login", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });
// }
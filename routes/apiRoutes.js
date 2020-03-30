// Requiring path to so we can use relative routes to our HTML files
//var path = require("path");
const express =require('express'); 
const router =express.Router(); 

// Requiring our custom middleware for checking if a user is logged in
//var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  
  app.get("/api/workouts", function(req, res) {
   if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../pub));
  });

 router.put("/api/workouts/:id", ({body, params} res) => {
     workoutNames.findByIdAndUpdate(
         params.id,
         {$push: exercises: body}, 
         {new: true, runValidators: true} 

     )
     .then(dbworkout => {
         res.json(dbworkout);
     })
     .catch(err => {
         res.json(err);
     });
 });

router.get("/api/workouts/range", (req, res) => {
    workoutNames.find({}).limit(7)
    .then(dbworkouts =>{
        console.log(dbworkouts)
        res.json(dbworkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.delete("/api/workouts", ({body}, res) => {
    workout.findByIdAndUpdate(body.id)
    .then(() => {
        res.json(true);
    }
)
.catch(err => {
    res.json(err);
});
}); 

module.exports = router; 
//   app.get("/itinerary", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/itinerary.html"));
//   });

//   app.get("/login", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });
// }
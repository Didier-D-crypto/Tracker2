// Requiring path to so we can use relative routes to our HTML files

const express =require('express'); 
const router =express.Router(); 

// Requiring our custom middleware for checking if a user is logged in
//var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  
  app.get("/api/workout", function(req, res) {
   if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../pub))
    
});

 router.put("/api/workout/:id", ({body, params} res) => {
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

router.get("/api/workout/range", (req, res) => {
    workoutNames.find({}).limit(7)
    .then(dbworkouts =>{
        console.log(dbworkouts)
        res.json(dbworkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.delete("/api/workout", ({body}, res) => {
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
}

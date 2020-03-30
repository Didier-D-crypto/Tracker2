const mongoose= require('mongoose'); 

const Schema = mongoose.Schema; 

//create workout schema & model

const workout = new Schema ({
   {
       day:{
           type: Date, 
           default: () => new Date()
       },
       exercises: [
           {
               type:{
                   type: String, 
                   trim: true, 
                   required: "What type of exercise?"
               },
               name: {
                   type:String, 
                   trim: true,
                   required: "What type of exercise?"
               },
               duration: {
                   type: Number, 
                   required: "What type of exercise?"
               },
               weight: {
                   type: Number
               },
               reps: {
                   type: Number
               },
               sets:{
                   type: Number
               },
               distance: {
                   type: Number
               },
           }
       ]
   }
{
    toJSON: {
        virtuals: true
    }
}
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 
    0);
});
const workout =mongoose.model("workout", workoutSchema);

module.exports =workout; 
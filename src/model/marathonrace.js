const mongoose = require("mongoose");


const olympicsSchema = new mongoose.Schema({
     ranking:{
        type:Number,
        required:true,
        unique:true
     },
     name:{
        type:String,
        required:true,
        trim:true
     },
     dob:{
        type:Date,
        required:true,
        trim:true
     },
     country:{
        type:String,
        require:true,
        trim:true
     },
     score:{
        type:Number,
        required:true,
        trim:true
     },
     event:{
        type:String,
            default:"100ms"
     },
        
}) 


const MensRanking = mongoose.model("MensRanking", olympicsSchema)

module.exports = MensRanking;
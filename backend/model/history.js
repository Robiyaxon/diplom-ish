const mongoose = require('mongoose');

const History=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    bemorId:{type:String,required:true, unique: true,trim:true}
});


module.exports = mongoose.model('history',History);
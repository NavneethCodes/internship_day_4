const mongoose=require('mongoose')//connecting mongoose
const movieSchema=mongoose.Schema({
    name:String,
    category:String,
    director:String,
    relyear:String,
    poster:String
})

const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData
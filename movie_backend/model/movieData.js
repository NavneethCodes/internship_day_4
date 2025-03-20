const mongoose=require('mongoose')//connecting mongoose
const movieSchema=mongoose.Schema({
    name:String,
    category:String,
    director:String,
    relyear:String,
    poster:String
})

const MovieData=mongoose.model('movie',movieSchema);//creating model movie basedin movie schema
module.exports=MovieData//expanding so that other files can acces this
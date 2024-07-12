const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    movieName:String,
    movieDirector:String,
    movieCategory:String,
    movieReleaseYear:Number
})
const MovieData = mongoose.model('movie', movieSchema);
module.exports = MovieData;
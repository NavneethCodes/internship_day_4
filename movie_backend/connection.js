const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://farooqafrina28:MJefQFa8RIjkb0Se@cluster0.7af0a07.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log("db is connected")
}).catch((res)=>{
    console.log('db is not connected')
})
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://navneetharun0402:navneetharun2004@cluster0.jztkyk0.mongodb.net/movies?retryWrites=true&w=majority&appName=cluster0').then((res)=>{
    console.log("db is connected")
}).catch((res)=>{
    console.log('db is not connected')
})
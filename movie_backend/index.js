const express = require('express');
const app = new express();
const PORT = 4000;
const movieModel = require('./model/movieData');
require('./connection');
app.get('/movies', async(req, res)=>{
    try{
        const data = await movieModel.find();
        res.send(data);
    }
    catch(error){
        console.log(error)
    }
})

app.listen(PORT, ()=>{
    console.log('Server is running on PORT 4000');
})
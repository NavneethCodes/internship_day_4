const express=require('express');
const cors =require('cors');
const app=new express();
const PORT = 4000;
const movieModel=require('./model/movieData');
require('./connection');
app.use(cors());
app.use(express.json());
app.get('/movies',async(req,res) => {
    try{
        const data=await movieModel.find();
        res.send(data);
    }
    catch (error){
        console.log(error);
    }}
);

app.post('/newmovie',async(req,res) => {
    try{
        var item=req.body;
        const datasave=new movieModel(item);
        const saveddata=await datasave.save();
        res.send('Post Successful');
    }catch (error){
        console.log(error);
    }
});

app.delete('/removemovie', async(req, res) => {
    try {

    } catch {}
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
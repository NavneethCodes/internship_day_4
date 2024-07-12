const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://navneetharun04:NHFLCcYxxiWcPdwt@cluster.miv9dum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB is not connected')
})
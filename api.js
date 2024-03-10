const express = require('express');
const api = express();
const PORT = 3200;
const foodrecord=require('./modules/foodinfo')
require('./db/conn')
api.use(express.json());

api.get('/',(req,res)=>{
  res.send('<h1>WELCOME TO API CREAION<h1>')
})

// Starting the server
api.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

api.get('./getfooddata',async(req,res)=>{
  try{
    const getfood=await foodrecord.find({});
    res.status(201).send(getfood)
  }
  catch(e){
      console.log(e);
  }
})

api.post('/foodrecord',async(req,res)=>{
  try{
    const addingfoodrecord =new foodrecord(req.body);
    const insertdata=await addingfoodrecord.save();
    console.log(insertdata);
    res.status(201).send(insertdata)
  }
  catch(e){
    console.log(e);
  }
})


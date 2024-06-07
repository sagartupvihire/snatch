const express = require('express')
const router = express.Router()
const ownerModel =require("../models/owner-model")
router.get("/",(req,res)=>{
    res.send("hey")

});


console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === "development"){

router.post("/create",async (req, res)=>{
    
   let owner = await ownerModel.find();
   if (owner.length >0) {
    return res.status(502).send("not have a owner already exist yet and")
   }

   let {fullname, email,password} = req.body;
   let createOwner = await ownerModel.create({
    fullname,
    email,
    password,
   })
   
   res.status(201).send(createOwner);
});
}
module.exports = router;
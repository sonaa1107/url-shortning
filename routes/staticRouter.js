const express=require("express")
const router=express.Router();
const URL=require("../models/url");

router.get("/",async(req,res)=>{
    const allurl=await URL.find({})
    return res.render("home",{
        urls:allurl
    })
})

module.exports=router;
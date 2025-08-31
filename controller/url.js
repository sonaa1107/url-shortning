const URL=require("../models/url")
const{nanoid}=require("nanoid")

async function handleGenerateShortUrl(req,res) {
    const body=req.body;
    if(!body.url)return res.status(400).json({err:"url required"})
    const shortId=nanoid(8);
    await URL.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[]
    })
    return res.status(200).json({id:shortId})
}

async function handleGetUrlById(req,res) {
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate({shortId},{$push:{visitHistory:{timestamps:Date.now()}}})
    res.redirect(entry.redirectUrl)
}
async function handleGetAnalytics(req,res) {
    const shortId=req.params.shortId;
    const result =await URL.findOne({shortId})
    return res.json({totalClick:result.visitHistory.length,analytics:result.visitHistory})
}
async function handleDeleteShortId(req,res){
    const shortId=req.params.shortId;
    const url=await URL.findOneAndDelete({shortId});
    return res.json({"status":"successfully deleted"});
}
async function handleDeleteAll(req,res) {
    await URL.deleteMany({})
    return res.json({status:"successfully delete all entry"})
}
module.exports={
    handleGenerateShortUrl,
    handleGetUrlById,
    handleGetAnalytics,
    handleDeleteShortId,
    handleDeleteAll,
}
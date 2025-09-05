const express=require("express");
const router=express.Router();
const {handleGenerateShortUrl, handleGetUrlById, handleGetAnalytics, handleDeleteShortId, handleDeleteAll, handleGetAllOnFrontEnd}=require("../controller/url")

router.route("/")
.post(handleGenerateShortUrl)
.delete(handleDeleteAll)
router
.route("/:shortId")
.get(handleGetUrlById)
.delete(handleDeleteShortId)
router.get("/analytics/:shortId",handleGetAnalytics)

module.exports=router;
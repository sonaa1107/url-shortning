const mongoose=require("mongoose");

async function mongoConnect(url) {
    return mongoose.connect(url).then(()=>console.log("mongoose connected"));
}
module.exports={mongoConnect};
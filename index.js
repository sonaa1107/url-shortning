const express=require("express");
const path=require("path")
const {mongoConnect}=require("./connection/connection")
const userrouter=require("./routes/url");
const staticrouter=require("./routes/staticRouter");
const app=express();
const PORT=8001;
//connection
mongoConnect("mongodb://127.0.0.1:27017/shorturl-01");

//set the ejs
app.set("view engine","ejs");
app.set("views",path.resolve('./views'));

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/url",userrouter); 
app.use("/",staticrouter);

app.listen(PORT,()=>console.log(`server started at port ${PORT}`))
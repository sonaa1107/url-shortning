const express=require("express");
const {mongoConnect}=require("./connection/connection")
const userrouter=require("./routes/url");
const app=express();
const PORT=8001;
//connection
mongoConnect("mongodb://127.0.0.1:27017/shorturl-01");

//middleware
app.use(express.json())

//routes
app.use("/url",userrouter); 

app.listen(PORT,()=>console.log(`server started at port ${PORT}`))
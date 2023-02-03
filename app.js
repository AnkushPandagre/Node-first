const express = require("express")
const app = express();
const path = require("path")

const indexRouter= require("./routers/index")

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use("/",indexRouter)
 
app.listen(3000,()=>{
    console.log("server is running ")
})
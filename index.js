require("dotenv").config()

const express=require("express")
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("Congratulations!! You have made your own server")
})

app.get("/twitter",(req,res)=>{
    res.send("Twitter Route")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Please login at chai aur code.</h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("Youtube custom")
})

// app.listen(port,()=>{
//     console.log(`New server opened on localhost:${port}`)
// })

app.listen(process.env.PORT,()=>{
    console.log(`New server opened on localhost:${process.env.PORT}`)
})
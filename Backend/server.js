import express from "express"
import cors from "cors"
const app=express()

app.use(cors())

app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            content:"First Joke",
            title:"This is joke 1"
        },
        {
            id:2,
            content:"Second Joke",
            title:"This is joke 2"
        },
        {
            id:3,
            content:"Third Joke",
            title:"This is joke 3"
        },
        {
            id:4,
            content:"Fourth Joke",
            title:"This is joke 4"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT||3000

app.listen(port,()=>{
    console.log(`Served at https://localhost:${port}`)
})
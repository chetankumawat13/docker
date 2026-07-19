import express from 'express'

const app = express()


app.get('/',(req,res) => {
    res.status(200).json({
        message:"hello ji "
    })
})

app.get('/api/data',(req,res) => {
   const data = {
    id:1,
    name:"sample-data",
    descriptionL:"this is a sample data"
   } 
   res.status(200).json(data)
})


app.listen(3000,() => {
    console.log("server is listen on port 3000");
})
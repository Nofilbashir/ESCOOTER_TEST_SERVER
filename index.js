const express = require('express')
const cors = require('cors')
const path = require('path')
const color = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const createListofObjects = require('./objectgenerator')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//routes
app.get('/api/impactData', (req,res)=>{
    const data = createListofObjects()
    res.send(data)
})

app.get('/', (req,res)=>res.send("E_SCOTER TEST SERVER"))




const start = async()=>{
    try{
        app.listen(PORT , ()=>{console.log(`server running on port ${PORT}`.bgGreen);})
    }catch(err){
        console.log(err)
    }
}

start()


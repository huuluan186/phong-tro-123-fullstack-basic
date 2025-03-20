import express from 'express';
require('dotenv').config()
import cors from 'cors'
const app = express()
import initRoutes from './src/routes';
import connectDatabase from './src/config/connectDB';

app.use(cors({
    origin:process.env.CLIENT_URL,
    methods:["POST","GET","PUT","DELETE"]
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

initRoutes(app)
connectDatabase()

const port=process.env.PORT || 8888
app.listen(port,()=>{
    console.log(`Website listening on port ${port}`)
})
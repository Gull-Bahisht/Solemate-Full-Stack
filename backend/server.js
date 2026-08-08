import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
console.log("Mongo URI:", process.env.MONGODB_URI);

const app = express()
const port = process.env.PORT || 4000


connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)

app.use('/api/product',productRouter)

app.use('/api/cart',cartRouter)

app.use('/api/order',orderRouter)


app.get('/',(req,res)=>{
    res.send("API Working")
})


app.listen(port,()=>{
    console.log(`Server Started on port: ${port}`)
})
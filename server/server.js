import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/UserRoute.js';
import sellerRouter from './routes/SellerRoutes.js';


const app=express();

const port=process.env.PORT||4000;

await connectDB();

// Allowed Multiple origins
const allowedOrigins=['http://localhost:5173'];

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));



app.get('/',(req,res)=>{
    res.send('Api is working');
});

app.use('/api/user',userRouter);
app.use('/api/seller',sellerRouter);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
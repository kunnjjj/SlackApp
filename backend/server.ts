import express,{Express,Request,Response} from "express";
import dotenv from 'dotenv'
import directMessageRoute from './routes/directMessageRoute.ts'
import cors from 'cors'

const app=express();
dotenv.config();

const PORT=process.env.PORT ?? '5000';

app.use(cors());

app.get('/messages',(req:Request,res:Response)=>{
    res.send('this is messages')
})


app.use(express.json())

app.use('/api/directmessage',directMessageRoute);

app.get('/',(req,res)=>{
    res.send('api running');
})

app.listen(PORT,()=>{
    console.log(`server running in mode ${process.env.NODE_ENV} on ${PORT} `)
})


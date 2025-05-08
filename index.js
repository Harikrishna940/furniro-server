import 'dotenv/config';
import express from 'express'
import connectdb from './db.js';
import cors from 'cors'
import AuthRoute from './routes/auth.js';
const app = express();
const PORT = process.env.PORT || 9000;


app.use(cors({
    origin:process.env.CLIENT_URL
}))
app.use(express.json())

app.use('/auth',AuthRoute)


app.post('/',async(req,res)=>{
    console.log(req.body); 
})

connectdb(process.env.MONGO_URI)
app.listen(PORT,()=>{console.log("running successfully",PORT);
})
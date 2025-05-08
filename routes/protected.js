import {Router} from "express";

const proRoute = Router();


proRoute.get('/protected',(req,res)=>{
    console.log("reached");
    console.log(req.user);
    
    
    res.json({message:"allowed"})
})

export default proRoute;
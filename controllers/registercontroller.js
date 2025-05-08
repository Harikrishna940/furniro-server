import bcrypt from "bcrypt"
import User from "../models/user.js";


export const registerController=async(req,res)=> {
        try {
        
        if (!req.body.name||!req.body.number||!req.body.email||!req.body.password) {
            return res.status(401).json({message:'all filed required'})
        }
        
            const {name,number,email,password} = req.body
            // console.log(password);
        
            let data ={
                name,
                number,
                email,
            }
        
            const hashedpassword = await bcrypt.hash(password,10)
            data.password=hashedpassword

            await User.create(data);

            return res.status(200).json({message:'registered sucessfully'})
            
        
        
        
        
        } catch (error) {
            console.log('error occured in register controller',error);
            
        }
        }

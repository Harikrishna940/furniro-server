import { Router } from "express";
import bcrypt from "bcrypt"
import { registerController } from "../controllers/registercontroller.js";
import User from "../models/user.js";
import jwt from 'jsonwebtoken'
import { logincontroller } from "../controllers/logincontroller.js";
import authMiddleware from "../middlewares/authmiddle.js";


const AuthRoute = Router()

AuthRoute.post('/register', registerController)

AuthRoute.post('/login',logincontroller)

export default AuthRoute;
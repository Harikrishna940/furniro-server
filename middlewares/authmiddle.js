import jwt from "jsonwebtoken"
import User from "../models/user.js";

export default async function authMiddleware(req, res, next) {
    try {

        let token;
        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ')[1]
            // console.log(token);

        }
        const decoded = jwt.verify(token, 'secretkey')
        // console.log(decoded);

        const user = await User.findOne({ _id: decoded.id })

        if (user) {
            req.user = user
            next()
        }


    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "unauthorized" })
    }
}